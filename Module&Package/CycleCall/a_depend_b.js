/*
 * @CreateTime: Mar 4, 2017 4:25 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 4, 2017 4:38 PM
 * @Description: This module depend on b module
 */

console.info('a module start loading');
exports.finishLoad = false;

let b = require('./b_depend_a.js');
console.info('in a module, b.finishLoad=%j', b.finishLoad);
exports.finishLoad = true;
console.info('a.hasFinishLoaded');