/**
 * yag-env
 *
 * @copyright Copyright (c) 2016, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/yag-env
 */
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
if (!!data.EXPORTS) {
    let varsToExport = String(data.EXPORTS).trim().split(/\s*,\s*/g);
    for (let varToExport of varsToExport) {
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
const ENV = envName;
const isDevelopment = ('development' == ENV);
const isTesting = ('testing' == ENV);
const isStaging = ('staging' == ENV);
const isProduction = ('production' == ENV);
env.ENV = ENV;
env.isDevelopment = isDevelopment;
env.isTesting = isTesting;
env.isStaging = isStaging;
env.isProduction = isProduction;
export { env, ENV, isDevelopment, isTesting, isStaging, isProduction };
//# sourceMappingURL=index.js.map