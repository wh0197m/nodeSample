/*
 * @CreateTime: Apr 4, 2017 8:19 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Apr 4, 2017 9:05 PM
 * @Description: Http客户端
 */

// 在Node.js框架中，主要是通过HTTP模块中的http.request()方法来完成HTTP客户端功能
const http = require('http');

/**
 * @type{{hostname: string, port:number, path: string, method:string}}
 */
let options = {
    hostname: 'localhost',
    port: 6868,
    path: '/',
    method: 'POST'
}

/**
 * 通过http.request()方法来完成HTTP客户端
 * 由客户端向HTTP服务器发起请求
 * get方法的syntax: http.get(options, callback);
 */
let req = http.request(options, (res) => {
    console.info('STATUS: ' + res.statusCode);
    console.info('HEADERS:' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.info('BODY: ' + chunk);
    });
})

/**
 * 监听request对象的‘error'事件
 */
req.on('error', (e) => {
    console.info('problem with request: ' + e.message);
})

/**
 * write data to request body
 */
req.write('data\n');

/**
 * write end to request body
 */
req.end();