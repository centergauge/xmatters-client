


export class XMattersBaseURL {
    readonly _companyName: string;
    readonly _deployment: string;
    readonly _version: string;

    constructor(companyName: string, deployment: string, version: string) {
        this._companyName = companyName;
        this._deployment = deployment;
        this._version = version || '1';
    }

    get baseUrl(): string {
        return `https://${this._companyName}.${this._deployment}.xmatters.com/api/xm/${this._version}`;
    }
}

// https://<company>.<deployment>.xmatters.com/api/xm/<version>/

