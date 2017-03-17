/*
 * @CreateTime: Mar 12, 2017 11:27 AM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 12, 2017 11:44 AM
 * @Description: Get OS info by OS module
 */
const os = require('os');
const inspect = require('util').inspect;

/**
 * get current os and platfrom
 */
console.info('The Current OS is: ');
console.info(os.type());
console.info();

console.info('The Current Platform: ');
console.info(os.platform());
console.info();

/**
 * 获取操作系统默认的临时文件目录
 */
console.info(`当前${os.type()}系统临时目录为：${os.tmpdir()}`);
console.info();

/**
 * get OS hostname
 */
console.info(`当前系统主机名为：${os.hostname()}`);
console.info();

/**
 * get OS Architecture
 */
console.info(`当前操作系统的架构为：${os.arch()}`);
console.info();

/**
 * get os version
 */
console.info(`当前操作系统的发行版本是：${os.release()}`);
console.info();

/**
 * 获取操作系统的运行时间
 */
console.info(`当前操作系统的运行时间：${os.uptime()}`);
console.info();

/**
 * 获取操作系统的内存状态
 */
console.info(`当前操作系统的内存总量为：${parseInt(os.totalmem()/1024/1024)}MB`)
console.info(`当前操作系统的空闲内存：${parseInt(os.freemem()/1024/1024)}MB`);
console.info();

/**
 * 获取CPU内核信息
 */
console.info(`当前机器的CPU情况：${inspect(os.cpus())}`);
console.info();

/**
 * 当前机器的网络接口信息
 */
console.info(`当前机器的网络接口：${inspect(os.networkInterfaces())}`);
console.info();