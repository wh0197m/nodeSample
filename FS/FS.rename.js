/*
 * @CreateTime: Mar 27, 2017 9:41 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 27, 2017 9:52 PM
 * @Description: File System Rename
 */
const fs = require('fs');

/* Sync */
console.time('fs-rename-sync');
fs.renameSync('temp/123.txt', 'temp/123-sync.txt');
console.timeEnd('fs-rename-sync');

/* Async */
console.time('fs-rename-async');
fs.rename('temp/124.txt', 'temp/124-async.txt', (err) => {
    console.time('time-10000*10000');
    for (let i = 0; i < 10000; ++i) {
        for (let j = 0; j < 10000; ++j) {;
        }
    }
    console.timeEnd('time-10000*10000');
    if (err) throw err;
    console.log('renamed complete');
});
console.timeEnd('fs-rename-async');