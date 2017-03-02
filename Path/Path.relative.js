/*
 * @CreateTime: Mar 2, 2017 11:31 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 2, 2017 11:49 PM
 * @Description: Path relative Function
 */

const path = require('path');

console.info('Current Working Directory Is: ');
console.info(process.cwd());
console.info();

let a_path = 'Path.resolve.js';
console.info('path.resolve("Path.resolve.js") is: ');
console.info(path.resolve(a_path));
console.info();

/**
 * You can see path.relative accept 2 parameters(string)
 */
let b_path = 'Path.resolve.js';
let c_path = 'Url.resolve.js';
console.info('path.relative("Path.resolve.js", "Url.resolve.js") is: ');
console.info(path.relative(b_path, c_path));
console.info();