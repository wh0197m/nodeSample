/*
 * @CreateTime: Apr 4, 2017 1:00 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Apr 4, 2017 1:23 PM
 * @Description: 利用流模块来发送数据
 */

const stream = require('stream');

let rs = new stream.Readable;

/**
 * 使用可读流发送数据
 */
rs.push('Stream ');
rs.push('Module ');
rs.push('Push ');
rs.push('And ');
rs.push('Pipe');
rs.push('\n');

// 使用push方法通知发送数据完毕
rs.push(null);
rs.pipe(process.stdout); //将流导出，可读流可以在接收者没有读取数据之前，缓存所有压入的数据

/**
 * 使用可读流可写流来复制文件
 */
const fs = require('fs');
let writeS = fs.createWriteStream('temp/target.txt'); // 文件如果不存在，则会自动创建
let readS = fs.createReadStream('temp/basic.txt');
readS.pipe(writeS);

/**
 * 如何使用unpipe()方法来接触pipe()方法设置的流应用
 */
// setTimeout(() => {
//     console.log('停止写入到temp/target.txt中');
//     readS.unpipe(writeS); // 解除设置流
//     console.info();
//     console.info('自行关闭文件流');
//     writeS.end(); // 关闭文件流
// }, 1)