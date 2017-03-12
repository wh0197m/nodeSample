/*
 * @CreateTime: Mar 12, 2017 8:49 AM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 12, 2017 9:29 AM
 * @Description: child_process exec function
 */

/* 使用exec创建子进程 */
const exec = require('child_process').exec;
let ls_var = exec('ls -la /');
ls_var.stdout.on('data', (data) => {
    console.info('stdout: ' + data);
})

/**
 * Of course, you can implement all things above
 * by the following way
 */
exec('ls -la /etc/', (error, stdout, stderr) => {
    console.info('stdout: ' + stdout);
})

/* 使用exec方法绑定错误事件 */
exec('cat a_file_did_not_exsit.js', (err, stdout, stderr) => {
    console.info('cat a_file_did_not_exsit.js stdout: ');
    console.info(stdout);
    console.info('cat a_file_did_not_exsit.js stderr: ');
    console.info(stderr);
    if (err !== null) {
        console.info('cat a_file_did_not_exsit.js err: ');
        console.info(err);
    }
})

/**
 * exec第二参数option为可选项, 默认值为下
 */
let options = {
    encoding: 'utf8',
    timeout: 0, // 如果timeout大于0，则进程超过timeout毫米之后，会被终止
    maxBuffer: 200 * 2014, // 指定了stdout和stderr所允许的最大数据量
    killSignal: 'SIGTERM',
    cwd: null,
    env: null
}