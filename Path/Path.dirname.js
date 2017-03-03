/*
 * @CreateTime: Mar 3, 2017 8:34 AM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 3, 2017 8:42 AM
 * @Description: Path dirname Function
 */

const path = require('path');

let a_path = "..";
let b_path = "Url/queryString.js";
let absolute_path = path.resolve(a_path, b_path);
console.info('path.resolve("..", "Url/queryString.js") is: ');
console.info(path.resolve(absolute_path));
console.info();

console.info("The file queryString.js dirname is: ");
console.info(path.dirname(absolute_path));
console.info();