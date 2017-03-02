/*
 * @CreateTime: Mar 2, 2017 11:22 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 2, 2017 11:29 PM
 * @Description: Path Resolve Function
 */

const path = require('path');

console.info('Current Working Directory Is: ')

/**
 * process.cwd() means the current
 * work directory of this process
 */
console.info(process.cwd());
console.info();

let a_path = "Path.normalize.js";
console.info('path.resolve("Path.normalize.js") is :');
console.info(path.resolve(a_path));
console.info();

let b_path = "Path.join.js";
let c_path = "Path.join";
console.info('path.resolve("Path.join", "path.join.js") is :');
console.info(path.resolve(c_path, b_path));
console.info();