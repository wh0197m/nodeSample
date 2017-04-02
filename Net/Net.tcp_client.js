/*
 * @CreateTime: Apr 2, 2017 11:08 AM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Apr 2, 2017 12:06 PM
 * @Description: 创建基本的TCP客户端
 */
const net = require('net');
const PORT = 8888;
const HOST = '127.0.0.1';
/**
 * 通过net.connect(PORT, HOST, callback())来建立客户端
 */
let client = net.connect(PORT, HOST, () => {
    console.info('client connected');
    console.info();
})

client.on('data', (buffer) => {
    console.info('client on data....');
    console.info();
})

client.on('end', () => {
    console.info('client disconnected');
    console.info();
})