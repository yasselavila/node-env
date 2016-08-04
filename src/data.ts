/**
 * yag-env
 *
 * @copyright Copyright (c) 2016, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/npm-env
 */

let flagExprs: {[key: string]: RegExp} = {
  'production': /^PROD(UCTION)?$/i,
  'staging': /^STAGING$/i,
  'testing': /^TEST(ING)?$/i,
  'development': /^DEV(EL(OPMENT)?)?$/i,
};

let trueExpr: RegExp = /^(TRUE|YES|1)$/i;

/* Types */

export interface BaseData {
  [key: string]: any;
}

export interface ProcessedData {
  /* This flag is necessary for preprocessed values of process.env,
   * like the defined on webpack bundles */
  $PROCESSED?: boolean;
}

export interface ProcessData extends BaseData, ProcessedData {
  EXPORTS?: string;
}

export interface Data extends ProcessedData {
  /* ENV name */
  ENV: string;
  /* Flags */
  isProduction: boolean;
  isStaging: boolean;
  isTesting: boolean;
  isDevelopment: boolean;
  /* Extra data exported */
  exported: BaseData;
}

/* Tools */

export function createData(envName?: string, base?: any): Data {
  envName = String(envName || 'production').toLowerCase();
  let ret: Data = <any>(base || {});

  ret.ENV = envName;
  ret.isProduction = ('production' == envName);
  ret.isTesting = ('testing' == envName);
  ret.isStaging = ('staging' == envName);
  ret.isDevelopment = ('development' == envName);

  return ret;
}

export function getData(varName: string, varValue: any): Data|null {
  let ret: Data|null = null;

  for (let en in flagExprs) {
    if (flagExprs.hasOwnProperty(en)
      && (flagExprs[en].test(varName) && trueExpr.test(varValue))
    ) {
      ret = createData(en);
      break;
    }
  }

  return ret;
}
