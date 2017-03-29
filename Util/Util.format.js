/*
 * @CreateTime: Mar 29, 2017 10:21 AM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 29, 2017 10:25 AM
 * @Description: 格式化字符串
 */
const util = require('util');

/**
 * %s - 字符串
 * %d - 数字
 * %j - JSON 如果这个参数包含循环对象的引用，将会被替换成字符串Circular
 * %% - 单独一个百分号，不会消耗参数
 */
console.info(util.format('%s:%s', 'yes')) // yes: %s
console.info(util.format('%s:%s', 'yes', 'no', 'mid')) // yes:no mid
console.info(util.format(1, 2, 3)) // 1 2 3