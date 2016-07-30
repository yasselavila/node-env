/**
 * yag-env
 *
 * @copyright Copyright (c) 2016, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/npm-env
 */

import {BaseData, ProcessData, Data, getData, createData} from './data';

export function processEnvData(envData: ProcessData): Data {
  /* Data */

  let envName: string|null = envData['NODE_ENV'] || envData['ENV'] || null;
  let data: Data|null = !!envName ? getData(envName, true) : null;

  /* Iterate and save data to export */

  let varsNamesToExport: string[] = String(envData.EXPORTS || '').trim().split(/\s*,\s*/g);
  let varsToExport: BaseData = {};

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
  data.$PROCESSED = true;

  return data;
}
