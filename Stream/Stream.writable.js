/*
 * @CreateTime: Apr 4, 2017 1:25 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Apr 4, 2017 1:39 PM
 * @Description: 使用可写流写文件
 */
const fs = require('fs');
let ws = fs.createWriteStream('temp/writable.txt');

/* syntax: writeable.write(chunk, [encoding], [callback]) */
ws.write('Stream ');
ws.write('Module ');
ws.write('Writable ');

setTimeout(() => {
    ws.end('\n');
}, 3000)