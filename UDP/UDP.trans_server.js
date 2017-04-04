/*
 * @CreateTime: Apr 4, 2017 9:23 AM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Apr 4, 2017 9:31 AM
 * @Description: UDP通讯客户端
 */
const udp = require('dgram');
const HOST = '127.0.0.1';
const PORT = 8080;

let server = udp.createSocket('udp4'); //udp4代表ipv4，udp4代表ipv6
server.bind(PORT, HOST); // 注意这里不是用listen，而是用bind

server.on('listening', () => {
    let address = server.address(); // 返回服务器地址和端口号
    console.info('UDP Server listening on ' + address.address + ':' + address.port);
    console.info();
})

server.on('message', (message, remote) => {
    console.info('UDP server received from ' + remote.address + ':' + remote.port);
    console.info('-' + message);
    console.info();
    server.close();
})

server.on('error', (err) => {
    console.info("server error:\n" + err.stack);
    console.info();
    server.close();
})

server.on('close', () => {
    console.info('server closed');
    console.info();
})