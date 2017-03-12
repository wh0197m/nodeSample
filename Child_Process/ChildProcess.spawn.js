/*
 * @CreateTime: Mar 7, 2017 10:43 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 12, 2017 9:18 AM
 * @Description: child_process spawn function
 */

/* 使用spawn创建子进程 */
const spawn = require('child_process').spawn;
let ls_var = spawn('ls', ['-l', '-a', '/']);

ls_var.stdout.on('data', (data) => {
    console.info('stdout: ' + data);
})

/* 使用spawn方法绑定系统事件 */
let cat = spawn('cat');

/**
 * 捕获控制台输出对象stdout的data事件
 */
cat.stdout.on('data', (data) => {
    console.info(data.toString());
});

/**
 * 绑定系统的exit事件
 */
cat.on('exit', () => {
    console.info('cat on exit')
});

/**
 * 绑定系统close事件
 */
cat.on('close', () => {
    console.info('cat on close')
});

cat.stdin.write('cat on data');
cat.stdin.end();