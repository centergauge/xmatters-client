


export abstract class AuthorizationCredentials {
    public abstract getCredentialsMap(): Map<string, string>;
}

export abstract class AuthorizationResult {
    abstract isAuthorized(): boolean;
    abstract getAuthorizationHeader(): string;
}

export abstract class Authorizer {
    abstract authorize(): AuthorizationResult;
}


export class BasicAuthorizationCredentials extends AuthorizationCredentials {
    private readonly _username: string;
    private readonly _password: string;

    constructor(username: string, password: string) {
        super();
        this._username = username;
        this._password = password;
    }

    public getCredentialsMap(): Map<string, string> {
        return new Map<string, string>([['username', this._username], ['password', this._password]]);
    }
}

export class BasicAuthorizationResult extends AuthorizationResult {
    private readonly _authorized: boolean;
    private readonly _username: string;
    private readonly _password: string;
    constructor(authorized: boolean, username: string, password: string) {
        super();
        this._authorized = authorized;
        this._username = username;
        this._password = password;
    }

    isAuthorized(): boolean {
        return this._authorized;
    }

    getAuthorizationHeader(): string {
        return 'Basic ' + Buffer.from(this._username + ':' + this._password).toString('base64');
    }
}

export class BasicAuthorizer extends Authorizer {
    private readonly _credentials: BasicAuthorizationCredentials;

    constructor(credentials: BasicAuthorizationCredentials) {
        super();
        this._credentials = credentials;
    }

    authorize(): AuthorizationResult {
        const user = this._credentials.getCredentialsMap().get('username');
        let pass = this._credentials.getCredentialsMap().get('password');
        
        // TODO: Authorize now via xmatters...
        

        return new BasicAuthorizationResult(true, user!!, pass!!);
    }
}