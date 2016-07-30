/**
 * yag-env
 *
 * @copyright Copyright (c) 2016, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/yag-env
 */
import { getData, createData } from './data';
/* Env data source: process.env */
let envData;
try {
    envData = process.env;
}
catch (e) {
    envData = {};
}
/* Data */
let envName = envData['NODE_ENV'] || envData['ENV'] || null;
let data = !!envName ? getData(envName, true) : null;
/* Iterate and save data to export */
let varsNamesToExport = String(envData.EXPORTS || '').trim().split(/\s*,\s*/g);
let varsToExport = {};
for (let key in envData) {
    if (envData.hasOwnProperty(key)) {
        /* Data from flag */
        if (!data && (null !== (data = getData(key, envData[key])))) {
            continue;
        }
        /* A variable to export */
        if ((-1 != varsNamesToExport.indexOf(key)) && (key in envData)) {
            varsToExport[key] = envData[key];
        }
    }
}
/* Complete data */
if (null === data) {
    data = createData();
}
data.exported = varsToExport;
/* Exports */
export const ENV = data.ENV;
export const isProduction = data.isProduction;
export const isTesting = data.isTesting;
export const isStaging = data.isStaging;
export const isDevelopment = data.isDevelopment;
export const exported = data.exported;
export default data;
//# sourceMappingURL=index.js.map