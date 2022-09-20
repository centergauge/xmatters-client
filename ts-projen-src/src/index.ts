

export class XMattersClient {
  private readonly _api: string;
  private readonly _apiVersion: string;
  private readonly _apiUrl: string;
  private readonly _apiKey: string;

  constructor(apiUrl: string, apiKey: string, apiVersion: string = '1.3') {
    this._apiUrl = apiUrl;
    this._apiKey = apiKey;
    this._apiVersion = apiVersion;
    this._api = " "; // new Api(apiUrl, apiKey, apiVersion);
  }

  public get api(): string {
    return this._api;
  }

  public get apiVersion(): string {
    return this._apiVersion;
  }

  public get apiUrl(): string {
    return this._apiUrl;
  }

  public get apiKey(): string {
    return this._apiKey;
  }
}

export class XMattersClientCLIMain extends XMattersClient {
  constructor() {
    super(" ", " ", " ");
  }

  public main() {
    return 'hello, world!';
  }
}

console.log(new XMattersClientCLIMain().main());