/*
 * @CreateTime: Apr 2, 2017 11:12 AM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Apr 2, 2017 11:53 AM
 * @Description: 创建tcp服务器
 */

/**
 * net.createServer()创建一个TCP服务器实例
 * 同时调用listen()方法监听端口
 * 传入net.createServer的回调函数将作为connection事件的处理函数
 */
const net = require('net');
const HOST = '127.0.0.1';
const PORT = 8888;

net.createServer((socket) => {
    /**
     * 打印输出服务器监听信息
     */
    console.info("Server Listening on " + HOST + ":" + PORT);
    console.info();

    socket.on('data', (data) => {
        console.log('socket on data...:' + data);
    });

    socket.on('close', (data) => {
        console.log('connection was close');
    })
}).listen(PORT, HOST)