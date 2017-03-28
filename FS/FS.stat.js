/*
 * @CreateTime: Mar 27, 2017 10:26 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 27, 2017 10:29 PM
 * @Description: 获取文件信息
 */
const fs = require('fs');

/* Async */
fs.stat('temp/123-sync.txt', (err, stats) => {
    if (err) throw err;
    console.info(stats);
})
console.info();

/* Sync */
let stats = fs.statSync('temp/124-async.txt')
console.info(stats);