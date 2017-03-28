/*
 * @CreateTime: Mar 28, 2017 9:11 AM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 28, 2017 9:27 AM
 * @Description: 相对路径与绝对路径的转换
 */

/**
 * Node.js定义了两种方法来做路径转换
 * fs.realpath()
 * fs.realpathSync()
 */
const fs = require('fs');

let cache = { '/Shared': '/Users/Shared' };
let relpath = 'temp/124-async.txt';

// 注意cache, cache的key表示的是相对路径，而value表示的是绝对路径
// 通过cache，告知了nodejs，相对路径到绝对路径的映射关系
let resolvedPath = fs.realpathSync(relpath, cache);
console.info('temp/124-async.txt real path is: ');
console.info(resolvedPath);
console.info();