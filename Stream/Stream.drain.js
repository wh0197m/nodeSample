/*
 * @CreateTime: Apr 4, 2017 1:40 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Apr 4, 2017 1:51 PM
 * @Description: 可写流的drain事件和finish事件
 */
const fs = require('fs');

// 如果写入速度跟不上读出速度怎么办？可写流内部岂不是会溢出?如下这个方法可以解决这个问题
let rs = fs.createReadStream('temp/basic.txt');
let ws = fs.createWriteStream('temp/target.txt');

rs.setEncoding('utf8');

rs.on('data', (chunk) => {
    console.info('data event emitted');
    if (ws.write(chunk) === false) { // ws.write(chunk)返回false表示drain事件可以继续想流写入更多的数据
        console.log('数据写入缓存...');
        console.info();
        rs.pause(); // 暂停可读流
    }
})

ws.on('drain', () => { // drain意为流干，这里也即是说数据是否写完
    console.info('drain event emitted');
    console.info();
    rs.resume(); // 恢复可读流
})

rs.on('end', () => {
    ws.end(); // 在可写流调用ws.end()方法之后，并且所有数据已被写入到底层系统之后，会触发可写流的finish事件
})

ws.on('finish', () => {
    console.info('finish event emitted');
})