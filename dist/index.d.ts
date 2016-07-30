/**
 * yag-env
 *
 * @copyright Copyright (c) 2016, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/npm-env
 */
import { BaseData, Data } from './data';
declare let data: Data;
export declare const ENV: string;
export declare const isProduction: boolean;
export declare const isTesting: boolean;
export declare const isStaging: boolean;
export declare const isDevelopment: boolean;
export declare const exported: BaseData;
export default data;
