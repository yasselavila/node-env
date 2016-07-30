/**
 * yag-env
 *
 * @copyright Copyright (c) 2016, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/yag-env
 */

import {BaseData, ProcessData, Data} from './data';
import {processEnvData} from './process';

/* Env data source: process.env */

let envData: ProcessData;

try {
  envData = process.env;
} catch(e) {
  envData = {};
}

/* Data */

/* This helps with tree-shaking when closure-compiler
 * is used to compile browser bundles ;-) */
let data: Data = !envData.$PROCESSED ? processEnvData(envData) : (<Data>envData);

/* Exports */

export const ENV: string = data.ENV;
export const isProduction: boolean = data.isProduction;
export const isTesting: boolean = data.isTesting;
export const isStaging: boolean = data.isStaging;
export const isDevelopment: boolean = data.isDevelopment;
export const exported: BaseData = data.exported;

export default data;
