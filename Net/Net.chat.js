/*
 * @CreateTime: Apr 4, 2017 10:01 AM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Apr 4, 2017 10:32 AM
 * @Description: 聊天室应用
 */
const net = require('net');
const HOST = '127.0.0.1';
const PORT = '8080';

let clientList = [];
console.info('Now Create Chat Server');
console.info();

/**
 * 创建TCP服务器
 */
let server = net.createServer();

server.on('connection', (client) => {
    clientList.push(client); // socket入栈
    client.name = client.remoteAddress + ':' + client.remotePort;
    broadcast('hi, ' + client.name + '!\r\n');
    client.write('hi, ' + client.name + '!\r\n');
    /**
     * 监听data事件
     */
    client.on('data', (data) => {
            broadcast(client.name + 'say:' + data + '\r\n', client); //调用broadcast方法
        })
        /**
         * 监听end事件
         */
    client.on('end', () => {
        broadcast('hi, ' + client.name + 'quit!\r\n', client);
        clientList.splice(clientList.indexOf(client), 1);
    })
})

function broadcast(message, client) {
    let cleanup = [];
    for (let i = 0, len = clientList.length; i < len; i++) {
        if (client !== clientList[i]) {
            if (clientList[i].writable) {
                clientList[i].write(message);
            } else {
                cleanup.push(clientList[i]);
                clientList[i].destroy(); // 清除客户端socket
            }
        }
    }
    for (let j = 0, len = cleanup.length; j < len; j++) {
        clientList.splice(clientList.indexOf(cleanup[i]), 1);
    }
}

server.listen(PORT, HOST);