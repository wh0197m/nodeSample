/*
 * @CreateTime: Apr 4, 2017 8:01 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Apr 4, 2017 9:08 PM
 * @Description: 创建一个基本的HTTP服务器
 */
const http = require('http');
/**
 * syntax: http.createServer([requestListener]);
 * syntax: response.writeHead(statusCode, [reasonPhrase], [headers]);
 * syntax: response.write(chunk, [encoding]);
 * syntax: response.end([data], [encoding]); 每一次响应完成之后必须调用的方法，如果指定了data，那么则相当于先调用了write，在调用end
 * syntax: server.listen(port, [hostname], [backlog], [callback]); backlog为连接等待队列的最大长度
 */
http.createServer((req, res) => {
    /**
     * 通过res.writeHead()方法来写HTTP文件头
     */
    res.writeHead(200, { 'Content-type': 'text/html' }); // res.getHeader()方法获取HTTP头文件信息, res.setHeader()方法设置
    /**
     * 通过res.write()方法来写页面内容
     */
    res.write(`<h3>Node.js Http Module</h3>`);
    /**
     * 通过res.end()方法来发送相应状态码，并通知服务器消息完成
     */
    res.end(`<p>Create Basic Http Server!</p>`);
}).listen(8080);