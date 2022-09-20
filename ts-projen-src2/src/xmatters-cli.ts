import { XMattersClient } from "./xmatters-client";

import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
// import path from 'path';
import program from 'commander';

// An easy to change set of CLI presentation settings (not runtime behavior configuration)
export class XMattersClientCLIAppSettings {
    // Core App Information
    static CliAppName = 'XMatters Client CLI';
    static CliAppVersion = '1.0.0';
    static CliAppDescription = 'XMatters Client CLI';
    static CliAppAuthor = 'CenterGauge';

    // Load behavior
    static CliClearCLIOnLoad = true;
    static CliPrintLargeBanner = true;

    // Individual commands
    static CliOptions: Array<{flags: string, description: string, fn?: Function | undefined}> = [
        {flags: '-am, --auth-method', description: 'Which authorization method to use. One of Basic or, OAuth'},
        {flags: '-u, --username', description: 'Username for Basic Auth'},
        {flags: '-p, --password', description: 'Password for Basic Auth'},
        {flags: '-t, --oauth-token', description: 'OAuth Access Token'},
        {flags: '-cn, --company-name', description: 'Company Name for the XMatters Instance (e.g. mycompany)'},
        {flags: '-dn, --deployment', description: 'Deployment Name of the XMatters Instance (e.g. production, staging, development)'},
        {flags: '-c, --config', description: 'Path to a JSON file containing the XMatters Client CLI Configuration options'},
        {flags: '--generate-config', description: 'Generate defaulted XMatters Client CLI Configuration text as JSON (can be piped to a file)', fn: generateConfig},
    ];
}

function generateConfig() {}

export class XMattersClientCLIMain extends XMattersClient {
    constructor() {
        super(' ', ' ', ' ');
    }

    public main() {
        if (XMattersClientCLIAppSettings.CliClearCLIOnLoad) {
            clear();
        }
        if (XMattersClientCLIAppSettings.CliPrintLargeBanner) {
            console.log(chalk.red(figlet.textSync(XMattersClientCLIAppSettings.CliAppName, { horizontalLayout: 'full' })));
        }

        let p = program.program;
        p.version(XMattersClientCLIAppSettings.CliAppVersion);
        p.description(XMattersClientCLIAppSettings.CliAppDescription);

        for (let opt of XMattersClientCLIAppSettings.CliOptions) {
            p.option(opt.flags, opt.description)
        }

        p.parse(process.argv);
        p.processedArgs.forEach((arg) => {
            console.log("arg: ", arg);
        });
        const options = p.opts();
        console.log(typeof options);
        // value: string, key:string) => {
        //     console.log("key: ", key, "value: ", value);
        // });
        // console.log('you ordered a pizza with:');
        // if (program.peppers) console.log('  - peppers');
        // if (program.pineapple) console.log('  - pineapple');
        // if (program.bbq) console.log('  - bbq');
        // const cheese: string = true === program.cheese ? 'marble' : program.cheese || 'no';
        // console.log('  - %s cheese', cheese);
    }
}
