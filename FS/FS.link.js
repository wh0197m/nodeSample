/*
 * @CreateTime: Mar 28, 2017 7:53 AM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 28, 2017 7:58 AM
 * @Description: 创建删除文件链接（硬链接、符号链接）
 */
const fs = require('fs');

/**
 * Node.js 提供四种方法创建删除硬链接（本质上是文件副本）
 * fs.link()
 * fs.unlink()
 * fs.linkSync()
 * fs.unlinkSync()
 */

let exec = require('child_process').exec;
let child_exec = exec('cat temp/123-sync.txt', (err, stdout, stderr) => {
    console.info('cat temp/123-sync.txt');
    console.info(stdout);
    console.info(stderr);
});

console.info();
let srcpath = 'temp/123-sync.txt';
let dstpath = 'tempLink/123-sync.txt';

// fs.linkSync(srcpath, dstpath); // 如果一个硬链接已经存在，是不可以反复创建的，否则会报错

// fs.unlinkSync(dstpath);

/**
 * Node.js 提供了两种创建符号链接的方式（本质上就是快捷方式）
 * fs.symlink()
 * fs.symlinkSync()
 */

let spath = 'temp/124-async.txt';
let dpath = 'tempLink/124-async.txt';
// fs.symlinkSync(spath, dpath); // 如果不通过ls -la可能看不到该软连接

/**
 * Node.js还提供了两种方式读取软连接
 * fs.readlink()
 * fs.readlinkSync()
 */
let linkPath = fs.readlinkSync('tempLink/124-async.txt');
// let sourcePath = fs.readlinkSync(spath);

console.info('read linkpath: ' + linkPath);
// console.info('read sourcepath: ' + sourcePath); //会报错，因为这不是个软连接