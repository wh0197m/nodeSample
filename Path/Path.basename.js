/*
 * @CreateTime: Mar 3, 2017 10:27 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 3, 2017 10:56 PM
 * @Description: Path basename Function
 */

// This function could return content
// after the last splash if only have
// a parameter

const path = require('path');

console.info('path.basename("a/b/c/d/") is: ');
console.info(path.basename('a/b/c/d/'));
console.info();

let dir = 'temp';
let a_file = 'temp.doc';
let a_path = path.resolve(dir, a_file);
console.info('path.resolve("temp", "temp.doc") is: ');
console.info(path.resolve(dir, a_file));
console.info();

let suffix = path.extname(a_path);
console.info('path.extname(a_path) is: ');
console.info(path.extname(a_path));
console.info();

console.info('path.basename(a_path, suffix) is: ');
console.info(path.basename(a_path, suffix));
console.info();

/**
 * the return value should between the Last
 * splash and suffix
 */
console.info('path.basename(a_path, "mp.doc") is: ');
console.info(path.basename(a_path, 'mp.doc'));
console.info();

/**
 * the following function should return temp.doc
 */
console.info('path.basename("a/b/c/temp.doc", "temp.doc") is: ');
console.info(path.basename('a/b/c/temp.doc', 'temp.doc'));
console.info();

/**
 * the following function should return temp
 */
console.info('path.basename("a/b/c/d/", ".html") is: ');
console.info(path.basename('a/b/c/d/', '.html'));