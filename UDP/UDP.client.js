/*
 * @CreateTime: Apr 4, 2017 8:47 AM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Apr 4, 2017 9:19 AM
 * @Description: UDP客户端
 */
const udp = require('dgram');
const HOST = '127.0.0.1';
const PORT = 8080;

/**
 * 创建UDP连接客户端
 */
let message = new Buffer('UPD Client to Server: Hello Server!'); //定义数据包

const client = udp.createSocket('udp4');

client.send(message, PORT, HOST, (err, bytes) => {
    if (err) {
        throw err;
    }
    console.info('UDP message sent to...');
    console.info();
    client.close();
})

client.on('close', () => {
    console.info('client disconnected');
    console.info();
})