/*
 * @CreateTime: Mar 4, 2017 4:25 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 4, 2017 4:38 PM
 * @Description: This module depend on a module
 */

console.info('b module start loading');
exports.finishLoad = false;

let a = require('./a_depend_b.js');
console.info('in b module, a.finishLoad=%j', a.finishLoad);
exports.finishLoad = true;
console.info('b.hasFinishLoaded');