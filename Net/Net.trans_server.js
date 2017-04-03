/*
 * @CreateTime: Apr 3, 2017 8:52 AM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Apr 3, 2017 9:38 AM
 * @Description: 演示代码之间的通讯，服务端
 */
const net = require('net');
const PORT = 8080;
const HOST = '127.0.0.1';

net.createServer((socket) => {
    console.info('Server listening on: ' + HOST + ':' + PORT);
    console.info();

    console.info('CONNECTED:' + socket.remoteAddress + ':' + socket.remotePort);
    console.info();

    socket.on('data', (data) => {
        console.info('DATA ' + socket.remoteAddress + ':' + data);
        console.info();

        /* 返回数据用write函数 */
        // 可以通过socket.bytesRead来获得客户端数据发送过来的数据长度
        socket.write('Server write: ' + data);
        // 在write之后，可以通过socket.bytesWritten来获取服务端改写后发出去的数据长度
    })

    socket.on('close', (data) => {
        console.info('CLOSED:' + socket.remoteAddress + ':' + socket.remotePort);
        console.info();
    })
}).listen(PORT, HOST);