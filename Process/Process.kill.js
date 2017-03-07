/*
 * @CreateTime: Mar 7, 2017 7:53 AM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 7, 2017 8:09 AM
 * @Description: Kill a process by process.kill
 */
console.info('当前进程的id' + process.pid);
console.info();

/**
 * 在下面这个程序中，当31行执行了，32行依旧打印了内容
 * 这说明，kill根本就没有杀死进程，也即是说kill仅仅
 * 只是一个信号发送器，当然你可以在回调中去利用process.exit杀死。
 *
 * 在27行执行完毕之后，28行却不再打印内容了，这
 * 反倒说明exit成功杀死了当前进程。
 */
process.on('SIGHUP', () => {
    console.info('Got A SIGHUP signal');
});

setTimeout(() => {
    console.info('Exiting....');
    // process.exit其实就触发了一个事件
    process.exit(0);
    console.info('已经退出进程id: ' + process.pid);
}, 1000);

process.kill(process.pid, 'SIGHUP');
console.info('正在推出进程id: ' + process.pid);