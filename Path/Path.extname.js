/*
 * @CreateTime: Mar 3, 2017 10:18 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 3, 2017 10:25 PM
 * @Description: Path extname Function
 */

const path = require('path');

let a_file = 'article.doc';

// you should know, extname function accept
// a path string, not a simple string
// the following sentence return nothing
console.info(path.extname('a_file'));
console.info();

let a_path = path.resolve(a_file);
console.info('path.extname(a_file) is: ');
console.info(path.extname(a_path));
console.info();