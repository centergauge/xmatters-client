
// /// Get each model object entry
// document.querySelectorAll('ul.tocify-header').forEach(a => console.log(a.children[0].attributes['data-unique']))


// // Get each sub-component/supporting function of each model object.
// document.querySelectorAll('ul.tocify-header').forEach(a => Array.from(a.children[1].children).forEach(el => console.log(el.attributes['data-unique'])))


import puppeteer from "puppeteer";
const modelData: Array<{name: string, subComponents: Array<string>}> = await puppeteer.launch().then(async browser => {
    const page = await browser.newPage();
    await page.goto('https://help.xmatters.com/xmapi/index.html');
    await page.waitForSelector('ul.tocify-header');
    const modelObjects = await page.evaluate(() => {
        const modObjsArr: Array<{name: string, subComponents: Array<string>}> = [];
        document.querySelectorAll('ul.tocify-header').forEach(a => {
            const modObj:{name: string, subComponents: Array<string>} = {
                name: a.children[0].attributes['data-unique'].value,
                subComponents: new Array<string>()
            };
            Array.from(a.children[1].children).forEach(el => {
                modObj.subComponents.push(el.attributes['data-unique'].value);
            });
            modObjsArr.push(modObj);
        });
        return modObjsArr;
    });
    // console.log(modelObjects);
    await browser.close();
    return modelObjects;
});
console.log(modelData);
// .then(modelObjects => {console.log(modelObjects);});
const groupedRoots = new Map<string, Array<{name: string, subComponents: Array<string>}>>();
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
        console.log("PROBLEM " + mel.name);
    } else {
        if (singularRoot in groupedRoots) {
            // console.log("Adding to existing group: ", groupedRoots[singularRoot].length);
            groupedRoots[singularRoot].push(mel);
            // console.log("\t Added: ", groupedRoots[singularRoot].length);
        } else {
            // console.log("Creating new group: " + singularRoot);
            const arr = new Array<{name: string, subComponents: Array<string>}>();
            arr.push(mel);
            groupedRoots[singularRoot] = arr;
        }
        console.log("groupedRoots: " + groupedRoots.size);
    }
    console.log("next....");
}

// read input from the user



console.log(JSON.stringify(groupedRoots, null, 4))

// // import axios, { Axios } from 'axios';
// import pkg from 'axios';
// const { Axios } = pkg;
// import { JSDOM, VirtualConsole, VirtualConsoleSendToOptions }from "jsdom";


// // in some file.js


// const fetchPage = async (url: string): Promise<string | undefined> => {
// //     url?: string;
// //   method?: Method | string;
// //   baseURL?: string;
// //   transformRequest?: AxiosRequestTransformer | AxiosRequestTransformer[];
// //   transformResponse?: AxiosResponseTransformer | AxiosResponseTransformer[];
// //   headers?: AxiosRequestHeaders;
// //   params?: any;
// //   paramsSerializer?: (params: any) => string;
// //   data?: D;
// //   timeout?: number;
// //   timeoutErrorMessage?: string;
// //   withCredentials?: boolean;
// //   adapter?: AxiosAdapter;
// //   auth?: AxiosBasicCredentials;
// //   responseType?: ResponseType;
// //   responseEncoding?: responseEncoding | string;
// //   xsrfCookieName?: string;
// //   xsrfHeaderName?: string;
// //   onUploadProgress?: (progressEvent: any) => void;
// //   onDownloadProgress?: (progressEvent: any) => void;
// //   maxContentLength?: number;
// //   validateStatus?: ((status: number) => boolean) | null;
// //   maxBodyLength?: number;
// //   maxRedirects?: number;
// //   beforeRedirect?: (options: Record<string, any>, responseDetails: {headers: Record<string, string>}) => void;
// //   socketPath?: string | null;
// //   httpAgent?: any;
// //   httpsAgent?: any;
// //   proxy?: AxiosProxyConfig | false;
// //   cancelToken?: CancelToken;
// //   decompress?: boolean;
// //   transitional?: TransitionalOptions;
// //   signal?: AbortSignal;
// //   insecureHTTPParser?: boolean;
// //   env?: {
// //     FormData?: new (...args: any[]) => object;
// //   };
//     let ax = new Axios({
//         url: url,
//         method: "GET",
//     })
//     const HTMLData = await ax.get(url)
//         // .then(res => res.data)
//         // .catch((error: AxiosError) => {
//         //     console.error(`There was an error with ${error.config.url}.`);
//         //     console.error(error.toJSON());
//         // });
//     console.log(HTMLData);
//     return HTMLData.data;
// }


// let xmattersApiUrl = "https://help.xmatters.com/xmapi/index.html";
// let page = await fetchPage(xmattersApiUrl);
// console.log("page value: ", page)
// console.log("PAGE DONE")
// console.log("page type: ", typeof page)
// const vcsto: VirtualConsoleSendToOptions = {
//     omitJSDOMErrors: false,
// }
// const _virtualConsole = new VirtualConsole();
// _virtualConsole.on("info", () => { console.log("info") });
// _virtualConsole.on("assert", () => {console.log("assert")});
// _virtualConsole.on("clear", () => {console.log("assert")});
// _virtualConsole.on("count", () => {console.log("assert")});
// _virtualConsole.on("countReset", () => {console.log("assert")});
// _virtualConsole.on("debug", () => {console.log("assert")});
// _virtualConsole.on("dir", () => {console.log("assert")});
// _virtualConsole.on("dirxml", () => {console.log("assert")});
// _virtualConsole.on("error", () => {console.log("assert")});
// _virtualConsole.on("group", () => {console.log("assert")});
// _virtualConsole.on("groupCollapsed", () => {console.log("assert")});
// _virtualConsole.on("groupEnd", () => {console.log("assert")});
// _virtualConsole.on("info", () => {console.log("assert")});
// _virtualConsole.on("log", () => {console.log("assert")});
// _virtualConsole.on("table", () => {console.log("assert")});
// _virtualConsole.on("time", () => {console.log("assert")});
// _virtualConsole.on("timeEnd", () => {console.log("assert")});
// _virtualConsole.on("timeLog", () => {console.log("assert")});
// _virtualConsole.on("timeStamp", () => {console.log("assert")});
// _virtualConsole.on("trace", () => {console.log("assert")});
// _virtualConsole.on("warn", () => {console.log("assert")});
// // _virtualConsole.on("sendTo", () => {});

// const newLines = "\n".repeat(100);
// const val = new JSDOM(page, {
//     virtualConsole: _virtualConsole, 
//     includeNodeLocations: true, 
//     pretendToBeVisual: true, 
//     resources: "usable", 
//     runScripts: "dangerously"
// });
// console.log(newLines)
// console.log(val.serialize())
// console.log(newLines)
// val.window.addEventListener("load", () => {
//     console.log("FETCH DONE")
//     let tc = val.window.document.querySelectorAll("ul");
//     console.log("tc: ", tc)
//     for (let n of Array.from(tc)) {
//         // if (n.className == "tocify-header") {
//             console.log("n: ", n)
//             console.log("n", n.id.toString());
//             console.log("n.", n.className)
//             console.log("n.", n.attributes.length)
//             for (let aa of Array.from(n.attributes)) {
//                 console.log("aa: ", aa)
//                 console.log(typeof aa)
//             }
//             console.log("n.classList: ", n.classList);
//             console.log("n.id: ", n.id);
//             // (a => console.log("attr: ", a))
//             console.log("n.textContent: ", n.textContent)
//             console.log("n.innerHTML: ", n.innerHTML)
//             console.log("n.outerHTML: ", n.outerHTML)
//             console.log("n.nodeValue: ", n.nodeValue)
//             console.log("n.nodeName: ", n.nodeName)
//             console.log("n.nodeType: ", n.nodeType)
        
//         // }
//     }

//     console.log("doing 2nd fetch")
//     let ul = val.window.document.querySelectorAll('ul.tocify-header')
//     console.log("\t complete")
//     console.log("ul: ", ul)

//     console.log("printing each")
//     console.log("ul.length: ", ul.length)
//     ul.forEach(a => console.log(a));

//     // for (let l of Array.from(ul)) {
//     //     console.log("\t", l);
//     // }
//     JSDOM.fromURL("https://example.com/").then(dom => {
//         console.log(dom.serialize());
//     });
//     process.exit(0);
// });