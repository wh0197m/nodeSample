/*
 * @CreateTime: Mar 29, 2017 10:08 AM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 29, 2017 10:20 AM
 * @Description: 验证
 */
const util = require('util');

// isArray
console.info(util.inspect(util.isArray([])))
console.info(util.inspect(util.isArray(new Array())))
console.info(util.inspect(util.isArray({})))
console.info()

// isError, Error()为通用的错误类型，而TypeError为类型错误的错误类型
console.info(util.inspect(util.isError(new Error())))
console.info(util.inspect(util.isError(new TypeError()))) // true
console.info(util.inspect(util.isError({
    name: 'Error',
    message: 'an error occured'
})))
console.info()

// isDate
console.log(util.isDate({}))
console.log(util.isDate(Date())) // false
console.log(util.isDate(new Date()))
console.info()

// isRegExp
console.log(util.inspect(util.isRegExp(/some regexp/)))
console.log(util.inspect(util.isRegExp(new RegExp('another regexp'))))
console.log(util.inspect(util.isRegExp({})))

// 类似的判断还有
// util.isBoolean
// util.isBuffer
// util.isFunction
// util.isNull
// util.isNullOrUndefined
// util.isNumber
// util.isObject
// util.isPrimitive
// util.isString
// util.isSymbol
// util.isUndefined