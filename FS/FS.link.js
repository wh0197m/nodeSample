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
 * Node.js 提供四种方法创建删除硬链接
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