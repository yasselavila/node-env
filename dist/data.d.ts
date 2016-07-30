export interface BaseData {
    [key: string]: any;
}
export interface ProcessData extends BaseData {
    EXPORTS?: string;
}
export interface Data {
    ENV: string;
    isProduction: boolean;
    isStaging: boolean;
    isTesting: boolean;
    isDevelopment: boolean;
    exported: BaseData;
    PROCESSED?: boolean;
}
export declare function createData(envName?: string, base?: any): Data;
export declare function getData(varName: string, varValue: any): Data | null;
