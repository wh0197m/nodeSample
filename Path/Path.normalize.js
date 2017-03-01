/*
 * @CreateTime: Mar 1, 2017 6:21 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 1, 2017 6:25 PM
 * @Description: Path Normalize Function
 */

var path = require('path');

var a_path = '/root/dir1/subDir';
console.info('path.normalize("/root/dir1/subDir") is: ' + path.normalize(a_path));

var b_path = '/root/dir1/////subDir';
console.info('path.normalize("/root/dir1/////subDir") is ' + path.normalize(b_path));