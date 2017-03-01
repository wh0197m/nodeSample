/*
 * @CreateTime: Mar 1, 2017 6:21 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 1, 2017 6:25 PM
 * @Description: Path Normalize Function
 */

let path = require('path');

let a_path = '/root/dir1/subDir';
console.info('path.normalize("/root/dir1/subDir") is: ' + path.normalize(a_path));
console.info();

let b_path = '/root/dir1/////subDir';
console.info('path.normalize("/root/dir1/////subDir") is ' + path.normalize(b_path));
console.info();

let c_path = '/root/dir1//subDir///';
console.info('path.normalize("/root/dir1//subDir///") is ' + path.normalize(c_path));
console.info();

let d_path = '/root/dir1/subDir/.';
console.info('path.normalize("/root/dir1/subDir/.") is ' + path.normalize(d_path));
console.info();

let e_path = '/root/dir1/subDir//.';
console.info('path.normalize("/root/dir1/subDir//.") is ' + path.normalize(e_path));
console.info();

let f_path = '/root/dir1/subDir//.3rdDir';
console.info('path.normalize("/root/dir1/subDir//.3rdDir) is ' + path.normalize(f_path));
console.info();

let g_path = '/root/dir1/subDir//..';
console.info('path.normalize("/root/dir1/subDir//..") is ' + path.normalize(g_path));
console.info();

let h_path = '/root/dir1/subDir//..3rdDir';
console.info('path.normalize("/root/dir1/subDir//..3rdDir") is ' + path.normalize(h_path));
console.info();

let j_path = '/root/dir1/subDir/../..';
console.info('path.normalize("/root/dir1/subDir/../..") is ' + path.normalize(j_path));
console.info();

let k_path = '/root/dir1/subDir//..//..';
console.info('path.normalize("/root/dir1/subDir//..//..") is ' + path.normalize(k_path));
console.info();