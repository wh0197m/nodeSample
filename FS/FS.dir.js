/*
 * @CreateTime: Mar 28, 2017 9:27 AM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 28, 2017 9:34 AM
 * @Description: 跟目录相关的操作，创建删除读取
 */
const fs = require('fs');

/**
 * Node.js提供了四种方法创建删除目录
 * fs.mkdir()
 * fs.mkdirSync()
 * fs.rmdir()
 * fs.rmdirSync()
 */

fs.mkdirSync('temp/mkdir', 500); //如果已经存在，则会报错
fs.rmdirSync('temp/mkdir'); //如果不存在，则会报错

/**
 * 读取文件目录
 * fs.readdir()
 * fs.readdirSync()
 */
let files = fs.readdirSync('temp');
console.info(files); // 返回的是一个数组