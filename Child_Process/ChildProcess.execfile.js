/*
 * @CreateTime: Mar 12, 2017 9:49 AM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 12, 2017 10:12 AM
 * @Description: child_process execfile function
 */

/* 注意/bin/ls是一个文件，所以我们可以商用execFile去执行脚本 */
const execFile = require('child_process').execFile;
execFile('/bin/ls', ['-lh', '.'], (err, stdout, stderr) => {
    if (err !== null) {
        console.info('execFile error: ' + err);
        console.info('execFile stderr: ' + stderr);
    } else {
        console.info('当前目录内容：');
        console.info('stdout: ' + stdout);
    }
})

/* 使用execFile方法绑定错误事件 */
/* /err目录不存在 */
execFile('/bin/ls', ['-la', '/err'], (err, stdout, stderr) => {
    if (err !== null) {
        console.info('execFile error: ' + err);
        console.info('execFile stderr: ' + stderr);
    } else {
        console.info('err目录内容为: ');
        console.info(stdout);
    }
})