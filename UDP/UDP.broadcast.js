/*
 * @CreateTime: Apr 4, 2017 9:53 AM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Apr 4, 2017 10:00 AM
 * @Description: UDP广播
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

/**
 * UDP客户端
 */
// let client = udp.createSocket('udp4');

// client.bind(function() {
//     client.setBroadcast(true); // 这是广播的关键, 广播地址是255.255.255.255, 广播信息是不会被路由器转发的
// })

// client.send(message, PORT, HOST, (err, bytes) => {
//     if (err) throw err;
//     console.info('UDP message sent to ' + HOST + ':' + PORT);
//     console.info();
//     console.info(bytes);
//     console.info();
//     client.close();
// })

// client.on('close', () => {
//     console.info('client disconnected');
//     console.info();
// })