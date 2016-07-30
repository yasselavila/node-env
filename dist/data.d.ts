export interface BaseData {
    [key: string]: any;
}
export interface ProcessedData {
    $PROCESSED?: boolean;
}
export interface ProcessData extends BaseData, ProcessedData {
    EXPORTS?: string;
}
export interface Data extends ProcessedData {
    ENV: string;
    isProduction: boolean;
    isStaging: boolean;
    isTesting: boolean;
    isDevelopment: boolean;
    exported: BaseData;
}
export declare function createData(envName?: string, base?: any): Data;
export declare function getData(varName: string, varValue: any): Data | null;
