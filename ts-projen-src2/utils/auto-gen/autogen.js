// /// Get each model object entry
// document.querySelectorAll('ul.tocify-header').forEach(a => console.log(a.children[0].attributes['data-unique']))
// // Get each sub-component/supporting function of each model object.
// document.querySelectorAll('ul.tocify-header').forEach(a => Array.from(a.children[1].children).forEach(el => console.log(el.attributes['data-unique'])))
import puppeteer from "puppeteer";
export async function FetchLatestXMattersAPIModel() {
    const modelData = await puppeteer.launch().then(async (browser) => {
        const page = await browser.newPage();
        await page.goto('https://help.xmatters.com/xmapi/index.html');
        await page.waitForSelector('ul.tocify-header');
        const modelObjects = await page.evaluate(() => {
            const modObjsArr = [];
            document.querySelectorAll('ul.tocify-header').forEach(a => {
                const modObj = {
                    name: a.children[0].attributes['data-unique'].value,
                    subComponents: new Array()
                };
                Array.from(a.children[1].children).forEach(el => {
                    modObj.subComponents.push(el.attributes['data-unique'].value);
                });
                modObjsArr.push(modObj);
            });
            return modObjsArr;
        });
        await browser.close();
        return modelObjects;
    });
    // Now group the returned data for generation
    const groupedRoots = new Map();
    for (let mel of modelData) {
        let unhyphenatedRoot = "";
        if (mel.name.includes('-')) {
            unhyphenatedRoot = mel.name.split('-')[0];
        }
        let singularRoot = "";
        if (unhyphenatedRoot === "" && mel.name.endsWith('s')) {
            singularRoot = mel.name.slice(0, -1);
        }
        else if (unhyphenatedRoot.length > 0) {
            if (unhyphenatedRoot.length > 0 && unhyphenatedRoot.endsWith('s')) {
                singularRoot = unhyphenatedRoot.slice(0, -1);
            }
            else {
                singularRoot = unhyphenatedRoot;
            }
        }
        else {
            singularRoot = mel.name;
        }
        if (singularRoot.length === 0) {
            // problem....
            console.log("A PROBLEM was encountered with model-gen - there is no available component/object group for the retreived item: " + mel.name);
            console.log("The full object was:");
            console.log(JSON.stringify(mel, null, 4));
            process.exit(1);
        }
        else {
            if (singularRoot in groupedRoots) {
                groupedRoots[singularRoot].push(mel);
            }
            else {
                const arr = new Array();
                arr.push(mel);
                groupedRoots[singularRoot] = arr;
            }
        }
    }
    // read input from the user
    console.log(JSON.stringify(groupedRoots, null, 4));
    return groupedRoots;
}
let apiModel = await FetchLatestXMattersAPIModel();
console.log(JSON.stringify(apiModel, null, 4));
