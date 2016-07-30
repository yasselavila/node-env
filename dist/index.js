/**
 * yag-env
 *
 * @copyright Copyright (c) 2016, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/yag-env
 */
"use strict";
var process_1 = require('./process');
/* Env data source: process.env */
var envData;
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
var data = !envData.$PROCESSED ? process_1.processEnvData(envData) : envData;
/* Exports */
exports.ENV = data.ENV;
exports.isProduction = data.isProduction;
exports.isTesting = data.isTesting;
exports.isStaging = data.isStaging;
exports.isDevelopment = data.isDevelopment;
exports.exported = data.exported;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = data;
//# sourceMappingURL=index.js.map