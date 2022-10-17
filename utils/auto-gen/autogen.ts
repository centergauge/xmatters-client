
// /// Get each model object entry
// document.querySelectorAll('ul.tocify-header').forEach(a => console.log(a.children[0].attributes['data-unique']))


// // Get each sub-component/supporting function of each model object.
// document.querySelectorAll('ul.tocify-header').forEach(a => Array.from(a.children[1].children).forEach(el => console.log(el.attributes['data-unique'])))


import puppeteer from "puppeteer";

export class XMattersComponent {
    name: string;
    subComponents: Array<string>;

    constructor(name: string = "", subComponents: Array<string> = new Array<string>()) {
        this.name = name;
        this.subComponents = subComponents;
    }

    public AddSubComponent(subComponent: string) {
        if (this.subComponents === undefined || this.subComponents === null) {
            this.subComponents = new Array<string>();
        }

        if (!this.subComponents.includes(subComponent)) {
            this.subComponents.push(subComponent);
        }
    }
    
    public equals(other: XMattersComponent): boolean {
        let nameEquals = this.name === other.name
        let lenEquals = this.subComponents.length === other.subComponents.length;
        let valueEquals = this.subComponents.every((v, i) => v === other.subComponents[i]);
        return nameEquals && lenEquals && valueEquals;
    }

    public json(): string {
        return JSON.stringify(this, null, 4);
    }
};


export class XMattersAPIModel {
    retrievalUrl: string;
    retrievalDate: Date;

    apiComponents: Array<XMattersComponent>;

    constructor(retrievalUrl: string, retrievalDate: Date, apiComponents: Array<XMattersComponent> = new Array<XMattersComponent>()) {
        this.retrievalUrl = retrievalUrl;
        this.retrievalDate = retrievalDate;

        this.apiComponents = apiComponents;
    }

    public equals(other: XMattersAPIModel): boolean {
        let urlEquals = this.retrievalUrl === other.retrievalUrl;
        let dateEquals = this.retrievalDate === other.retrievalDate;
        let lenEquals = this.apiComponents.length === other.apiComponents.length;
     
        let valueEquals = this.apiComponents.every((v, i) => v.equals(other.apiComponents[i]));
     
        return urlEquals && dateEquals && lenEquals && valueEquals;
    }

    public json(): string {
        return JSON.stringify(this, null, 4);
    }
}

export async function FetchLatestXMattersAPIData(): Promise<Map<string, Array<{name: string, subComponents: Array<string>}>>> {
    const modelData: Array<{name: string, subComponents: Array<string>}> = await puppeteer.launch().then(async browser => {
        const page = await browser.newPage();


        await page.goto('https://help.xmatters.com/xmapi/index.html');
        await page.waitForSelector('ul.tocify-header');
        console.log('Page loaded');
        console.log('\t page.url: ', page.url());
        
        
        const modelObjects = await page.evaluate(async () => {
            console.log('starting page.evaluate');
            const modObjsArr: Array<{name: string, subComponents: Array<string>}> = [];

            console.log('running document.querySelectorAll');
            document.querySelectorAll('ul.tocify-header').forEach(a => {
                let val = a.children[0].attributes['data-unique'].value;
                console.log('\t val: ', val);

                // const modObj = new XMattersComponent();
                // {name: string, subComponents: Array<string>} 
                let modObj = {name: val, subComponents: []};
                modObj.name = val;
                Array.from(a.children[1].children).forEach(el => {
                    let subComponentName = el.attributes['data-unique'].value;
                    // TODO: validate subComponent info
                    modObj.subComponents.push(subComponentName);
                    // modObj.AddSubComponent(subComponentName);
                });
                modObjsArr.push(modObj);
            });
            return modObjsArr;
        });
        await browser.close();
        return modelObjects;
    });

    // Now group the returned data for generation
    const groupedRoots = new Map<string, Array<XMattersComponent>>();
    for (let mel of modelData) {
        let unhyphenatedRoot = "";
        if (mel.name.includes('-')) {
            unhyphenatedRoot = mel.name.split('-')[0];
        }

        let singularRoot = "";
        if (unhyphenatedRoot === "" && mel.name.endsWith('s')) {
            singularRoot = mel.name.slice(0, -1);
        } else if (unhyphenatedRoot.length > 0) {
            if (unhyphenatedRoot.length > 0 && unhyphenatedRoot.endsWith('s')) {
                singularRoot = unhyphenatedRoot.slice(0, -1);
            } else {
                singularRoot = unhyphenatedRoot;
            }
        } else {
            singularRoot = mel.name;
        }

        if (singularRoot.length === 0) {
            // problem....
            console.log("A PROBLEM was encountered with model-gen - there is no available component/object group for the retreived item: " + mel.name);
            console.log("The full object was:")
            console.log(JSON.stringify(mel, null, 4));
            process.exit(1)
        } else {
            if (singularRoot in groupedRoots) {
                groupedRoots[singularRoot].push(mel);
            } else {
                const arr = new Array<{name: string, subComponents: Array<string>}>();
                arr.push(mel);
                groupedRoots[singularRoot] = arr;
            }
        }
    }

    // read input from the user
    console.log(JSON.stringify(groupedRoots, null, 4))
    return groupedRoots;
}

// GenerateCodeFromData()

let apiModel = await FetchLatestXMattersAPIData();
let jsonStr = JSON.stringify(apiModel, null, 4);
console.log(jsonStr);