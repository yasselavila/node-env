/**
 * yag-env
 *
 * @copyright Copyright (c) 2016, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/npm-env
 */
import { processEnvData } from './process';
/* Env data source: process.env */
let envData;
try {
    /*
     * This only works on Node.js
     *
     * With Webpack you can use DefinePlugin to replace 'process.env':
     *    ```js
     *    var env = require('yag-env');
     *    ...
     *    plugins: [
     *      new DefinePlugin({
     *        'process.env': JSON.stringify(env.default)
     *      })
     *    ]
     *    ...
     *    ```
     *
     * On other build-tools you must use something similar
     */
    envData = process.env;
}
catch (e) {
    /* Fallback for browsers */
    envData = {};
}
/* Data */
/* This helps with tree-shaking when closure-compiler
 * is used to compile browser bundles ;-) */
let data = !envData.$PROCESSED ? processEnvData(envData) : envData;
/* Exports */
export const ENV = data.ENV;
export const isProduction = data.isProduction;
export const isTesting = data.isTesting;
export const isStaging = data.isStaging;
export const isDevelopment = data.isDevelopment;
export const exported = data.exported;
export default data;
//# sourceMappingURL=index.js.map