/*
 * @CreateTime: Mar 27, 2017 10:30 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 28, 2017 7:51 AM
 * @Description: 更改文件所有权和文件访问权限
 */

/**
 * Node.js提供了四种更改文件所有权的方法
 * fs.chown() 直接文件路径
 * fs.chownSync() 直接文件路径
 * fs.fchown() 需要文件描述符
 * fs.fchownSync() 需要文件描述符
 */

const fs = require('fs');
fs.stat('temp/123-sync.txt', (err, stats) => {
        if (err) throw err;
        console.info(stats);
    }) //输出的uid/gid即是源文件的文件所有权

let fd = fs.openSync('temp/123-sync.txt', 'a');

// 通过路径
fs.chown('temp/123-sync.txt', 501, 20, (err) => {
    if (err) throw err;
    fs.stat('temp/123-sync.txt', (err, stats) => {
        if (err) throw err;
        console.info(stats);
    })
})

// 通过文件描述符
fs.fchmodSync(fd, 501, 20);
fs.stat('temp/123-sync.txt', (err, stats) => {
    if (err) throw err;
    console.info(stats);
})

/**
 * Node.js提供了四种更改文件权限的方法
 * fs.chmodSync() 直接文件路径
 * fs.chmod() 直接文件路径
 * fs.fchmodSync() 通过文件描述符
 * fs.fchmod() 通过文件描述符
 */

// 通过文件描述符
fs.fchmodSync(fd, 33269);

// 通过路径
fs.chmodSync('temp/123-sync.txt', 33269);