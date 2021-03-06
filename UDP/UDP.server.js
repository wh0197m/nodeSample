/*
 * @CreateTime: Apr 4, 2017 8:51 AM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Apr 4, 2017 9:20 AM
 * @Description: UDP服务端的模块名就是dgram
 */

/**
 * 创建udp服务器： udp:createSocket()
 */
const udp = require('dgram');
const HOST = '127.0.0.1';
const PORT = 8080;

let server = udp.createSocket('udp4'); //udp4代表ipv4，udp4代表ipv6
server.bind(PORT, HOST); // 注意这里不是用listen，而是用bind

server.on('listening', () => {
    console.info('UDP Server listening on...');
    console.info();
})

server.on('message', (message, remote) => {
    console.info('emmited "message" event ...');
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