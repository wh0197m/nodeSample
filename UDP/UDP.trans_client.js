/*
 * @CreateTime: Apr 4, 2017 9:23 AM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Apr 4, 2017 9:46 AM
 * @Description: UDP通讯客户端
 */
const udp = require('dgram');
const HOST = '127.0.0.1';
const PORT = 8080;

let message = new Buffer('UDP Client to Server: Hello Server');

let client = udp.createSocket('udp4');

client.send(message, PORT, HOST, (err, bytes) => {
    if (err) throw err;
    console.info('UDP message sent to ' + HOST + ':' + PORT);
    console.info();
    console.info(bytes);
    console.info();
    client.close();
})

client.on('close', () => {
    console.info('client disconnected');
    console.info();
})