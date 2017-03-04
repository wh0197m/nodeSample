/*
 * @CreateTime: Mar 4, 2017 4:22 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 4, 2017 4:39 PM
 * @Description: How NodeJS handle the Cycle Call？
 */

console.info('main.js was calling');

/**
 * Attention:
 * Suggest you write the filename with extname
 */
let a = require('./a_depend_b.js');
let b = require('./b_depend_a.js');

console.info('In Main Process, a.finishLoad=%j, b.finishLoad=%j', a.finishLoad, b.finishLoad);