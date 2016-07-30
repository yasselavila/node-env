/**
 * yag-env
 *
 * @copyright Copyright (c) 2016, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/npm-env
 */
"use strict";
var data_1 = require('./data');
function processEnvData(envData) {
    /* Data */
    var envName = envData['NODE_ENV'] || envData['ENV'] || null;
    var data = !!envName ? data_1.getData(envName, true) : null;
    /* Iterate and save data to export */
    var varsNamesToExport = String(envData.EXPORTS || '').trim().split(/\s*,\s*/g);
    var varsToExport = {};
    for (var key in envData) {
        if (envData.hasOwnProperty(key)) {
            /* Data from flag */
            if (!data && (null !== (data = data_1.getData(key, envData[key])))) {
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
        data = data_1.createData();
    }
    data.exported = varsToExport;
    data.$PROCESSED = true;
    return data;
}
exports.processEnvData = processEnvData;
//# sourceMappingURL=process.js.map