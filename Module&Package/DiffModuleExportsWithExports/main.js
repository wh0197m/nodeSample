/*
 * @CreateTime: Mar 4, 2017 11:07 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 4, 2017 11:49 PM
 * @Description: Understand the difference bettween module.exports and exports
 */

const otherModule = require('./otherModule.js');

let user = new otherModule('wh01am', 47);
let info = user.info();
let otherInfoByExports = user.otherInfo;

console.info('output info which defined by module.exports:')
console.info(info);
console.info();

console.info('output otherInfo which defined by exports:');
console.info(otherInfoByExports);