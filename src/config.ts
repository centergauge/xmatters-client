
export enum AuthorizationMethodType {
    Basic = 'Basic',
    OAuth = 'OAuth',
}

export enum LogLevelType {
    Debug = 'DEBUG',
    Info = 'INFO',
    Warn = 'WARN',
    Error = 'ERROR',
}

export class DefaultConfigurationSettings {
    public static readonly DefaultConfigFileName = 'xmatters-client-cli-config.json';
    public static readonly DefaultConfigFileDescription = 'XMatters Client CLI Configuration';
    public static readonly DefaultConfigFileAuthor = 'XMatters Client CLI';
    public static readonly DefaultConfigFileLicense = 'MIT';
    public static readonly DefaultConfigFileVersion = '1.0.0';
    public static readonly DefaultConfigFileHomepage = '';
}

export class ClientConfiguration {
    readonly _authorizationMethod: AuthorizationMethodType; 
    readonly _authorizationCredentials: Map<string, string>; 
    readonly _companyName: string;
    readonly _deploymentName: string;
    readonly _logLevel: LogLevelType;

    constructor(authorizationMethodType: AuthorizationMethodType, 
                authorizationCredentials: Map<string, string>, 
                companyName: string, 
                deploymentName: string, 
                logLevel: LogLevelType) {
        this._authorizationMethod = authorizationMethodType;
        this._authorizationCredentials = new Map();
        authorizationCredentials.forEach((value, key) => {
            this._authorizationCredentials.set(key, value);
        });
        this._companyName = companyName;
        this._deploymentName = deploymentName;
        this._logLevel = logLevel;
    }
}