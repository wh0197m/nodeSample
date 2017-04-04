/*
 * @CreateTime: Apr 4, 2017 12:25 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Apr 4, 2017 1:16 PM
 * @Description: 可读流
 */

const fs = require('fs');

let rs = fs.createReadStream('temp/basic.txt'); // 必须在当前目录下去执行node，否则会找不到该文件路径

// 设置编码方式
rs.setEncoding('utf8');

// readable事件处理函数
rs.on('readable', () => {
    console.info('readable event emitted');
    let chunk;
    while (null !== (chunk = rs.read())) { // rs.read([size])方法用于从内部缓冲区读取并返回若干数据，不使用size参数则读取所有
        console.log('得到了%d字节的数据', chunk.length);
        console.log('读到的数据是：' + chunk);
    }
    console.info();
})

// data事件处理函数
rs.on('data', (chunk) => {
    console.info('data event emitted');
    console.info('读取到了%d字节的数据...', chunk.length);
    rs.pause(); // 使一个处于流动模式的流停止出发data事件，并切换到非流动模式，并且让后续可用数据留在内存中
    console.info('接下来5秒不会有数据');
    setTimeout(function() {
        console.log('数据重新开始流动');
        console.info();
        rs.resume();
        console.info('内容是：' + chunk);
        console.info();
    }, 5000)
    console.info();
})

// error事件处理函数
rs.on('error', (err) => {
    console.info(err);
    console.info('error event emitted');
    console.info();
})

// end事件处理函数
rs.on('end', () => {
    console.info('end event emitted');
    console.info();
})

// close事件处理函数
rs.on('close', () => {
    console.info('close event emitted');
    console.info();
})