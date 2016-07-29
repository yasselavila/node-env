/**
 * yag-env
 *
 * @copyright Copyright (c) 2016, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/yag-env
 */

/* Data source: process.env */

var data: {[key: string]: any, EXPORTS?: string};

try {
  data = process.env || {};
} catch(e) {
  data = {};
}

/* Custom exports */

var env: any = {};

if (!!data.EXPORTS) {
  let varsToExport: string[] = String(data.EXPORTS).trim().split(/\s*,\s*/g);

  for (let varToExport of varsToExport) {
    env[varToExport] = data[varToExport] || null;
  }
}

/* ENV name */

var envName: string = data['NODE_ENV'] || data['ENV'] || 'development';

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

const ENV: string = envName;
const isDevelopment: boolean = ('development' == ENV);
const isTesting: boolean = ('testing' == ENV);
const isStaging: boolean = ('staging' == ENV);
const isProduction: boolean = ('production' == ENV);

env.ENV = ENV;
env.isDevelopment = isDevelopment;
env.isTesting = isTesting;
env.isStaging = isStaging;
env.isProduction = isProduction;

export {env, ENV, isDevelopment, isTesting, isStaging, isProduction};
