/*
 * @CreateTime: Mar 27, 2017 10:07 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 27, 2017 10:16 PM
 * @Description: 截取文件内容
 */

const fs = require('fs');

/* Async */
let fd = fs.openSync('temp/ftruncate.txt', 'a');

// 6表示从第六个字符开始截取之前的内容，从0计数
fs.ftruncate(fd, 6, (err) => {
    console.info('finish ftruncate');
});

/* Sync */
fs.ftruncateSync(fd, 5)