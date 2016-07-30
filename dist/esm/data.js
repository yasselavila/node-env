/**
 * yag-env
 *
 * @copyright Copyright (c) 2016, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/yag-env
 */
let flagExprs = {
    'production': /^P(ROD(UCTION)?)?$/i,
    'staging': /^S(TA?G(ING)?)?$/i,
    'testing': /^T(EST(ING)?)?$/i,
    'development': /^D(EV((EL(OPMENT)?)?)?)?$/i,
};
let trueExpr = /^(TRUE|YES|1)$/i;
/* Tools */
export function createData(envName, base) {
    envName = String(envName || 'production').toLowerCase();
    let ret = (base || {});
    ret.ENV = envName;
    ret.isProduction = ('production' == envName);
    ret.isTesting = ('testing' == envName);
    ret.isStaging = ('staging' == envName);
    ret.isDevelopment = ('development' == envName);
    return ret;
}
export function getData(varName, varValue) {
    let ret = null;
    for (let en in flagExprs) {
        if (flagExprs.hasOwnProperty(en)
            && (flagExprs[en].test(varName) && trueExpr.test(varValue))) {
            ret = createData(en);
            break;
        }
    }
    return ret;
}
//# sourceMappingURL=data.js.map