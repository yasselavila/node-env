/**
 * yag-env
 *
 * @copyright Copyright (c) 2016, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/yag-env
 */
"use strict";
/* Data source: process.env */
var data;
try {
    data = process.env || {};
}
catch (e) {
    data = {};
}
/* Custom exports */
var env = {};
exports.env = env;
if (!!data.EXPORTS) {
    var varsToExport = String(data.EXPORTS).trim().split(/\s*,\s*/g);
    for (var _i = 0, varsToExport_1 = varsToExport; _i < varsToExport_1.length; _i++) {
        var varToExport = varsToExport_1[_i];
        env[varToExport] = data[varToExport] || null;
    }
}
/* ENV name */
var envName = data['NODE_ENV'] || data['ENV'] || 'development';
switch (envName.toLowerCase()) {
    case 'production':
    case 'prod':
    case 'p':
        envName = 'production';
        break;
    case 'staging':
    case 'stg':
    case 's':
        envName = 'staging';
        break;
    case 'testing':
    case 'test':
    case 't':
        envName = 'testing';
        break;
    default:
        envName = 'development';
        break;
}
/* Exports */
var ENV = envName;
exports.ENV = ENV;
var isDevelopment = ('development' == ENV);
exports.isDevelopment = isDevelopment;
var isTesting = ('testing' == ENV);
exports.isTesting = isTesting;
var isStaging = ('staging' == ENV);
exports.isStaging = isStaging;
var isProduction = ('production' == ENV);
exports.isProduction = isProduction;
env.ENV = ENV;
env.isDevelopment = isDevelopment;
env.isTesting = isTesting;
env.isStaging = isStaging;
env.isProduction = isProduction;
//# sourceMappingURL=index.js.map