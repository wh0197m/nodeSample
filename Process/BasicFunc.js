/*
 * @CreateTime: Mar 6, 2017 10:56 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 6, 2017 11:12 PM
 * @Description: Basic Func of Process Module
 */

// get current work directory
console.info(process.cwd());

// change current directory
process.chdir('/Users/Guest');
console.info(process.cwd());

/**
 *  get info about system
 */

// get current process id number
console.info(process.pid);

// get current process title
console.info(process.title);

// get current Node version info
console.info(process.version);

// get current Node version detail info
console.info(process.versions);

// get config info of NodeJS
console.info(process.config);

// 运行当前进程可执行文件的绝对路径
console.info(process.execPath);

// 当前进程获取的参数
console.info(process.argv);

// 获取当前CPU架构参数
console.info(process.arch);

// 获取当前系统的平台
console.info(process.platform);

// 获取当前shell环境变量参数
console.info();
console.info("当前shell环境变量的参数：");
console.info(process.env);