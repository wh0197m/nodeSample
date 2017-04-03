/*
 * @CreateTime: Apr 3, 2017 8:55 AM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Apr 3, 2017 9:36 AM
 * @Description: 演示通讯客户端
 */
const net = require('net');
const PORT = 8080;
const HOST = '127.0.0.1';

let client = net.connect(PORT, HOST, () => {
    console.info('client connected');
    console.info();
    client.write('client write: Hello Server');
})

client.on('data', (data) => {
    console.info(data.toString());
    console.info();
    client.end(); // 执行关闭，这个关闭只是客户端自己断开而已，服务器不受影响，可以传一个参数data，那么就相当先执行socket.write(data,encoding), 然后在调用socket.end()
})

client.on('end', () => {
    console.info('client disconnected');
    console.info();
})