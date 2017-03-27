/*
 * @CreateTime: Mar 27, 2017 9:52 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 27, 2017 10:05 PM
 * @Description: Open or Close File
 */

/* 如果open的文件不存在，则会创建 */
const fs = require('fs');

/* Sync */
let fd = fs.openSync('temp/123-sync.txt', 'a');
console.info('文件描述符为：' + fd);
console.info('fs.openSync() Done');
console.info();

fs.closeSync(fd);
console.info('文件描述符为：' + fd);
console.info('fs.closeSync() Done');
console.info();

/* Async */
fs.open('temp/124-async.txt', 'a', (err, fd) => {
    if (err) {
        throw err;
    } else {
        console.info('文件描述符：' + fd);
        console.info('fs.open() Done');
        console.info();
    }
    fs.close(fd, () => {
        console.info('文件描述符为：' + fd);
        console.info('fs.close() Done');
        console.info();
    })
})