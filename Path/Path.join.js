/*
 * @CreateTime: Mar 1, 2017 11:49 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 1, 2017 11:56 PM
 * @Description: Path join Function
 */

// join function must accept string
let path = require('path');

let a_path = 'root';
let b_path = 'dir1';
let c_path = 'subDir';
let d_file = 'file.js';
let splash = '/';

console.info('path.join("root","dir1","subDir") is ' + path.join(a_path, b_path, c_path));
console.info();

console.info('path.join("root", "subDir", "/" , "d_file") is ' + path.join(a_path, c_path, splash, d_file));
console.info();