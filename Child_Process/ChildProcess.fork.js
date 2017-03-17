/*
 * @CreateTime: Mar 12, 2017 8:59 AM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 12, 2017 11:23 AM
 * @Description: child_process fork function
 */
const fork = require('child_process').fork;
const path = require('path');
/* 获取当前CPU内核数量 */
const cpus = require('os').cpus();
console.info('当前CPU内核数量：' + cpus.length);

for (let i = 0; i < cpus.length; i++) {
    console.info('Fork a new child_process now...');
    /**
     * 这里注意为什么我们要把work路径解析出来？
     * 倘若我们直接在fork里面写fork('./fork/work.js')
     * 那么在nodeSample根目录下执行node Child_Process/ChildProcess.fork.js就会出错
     * 而在nodeSample/Child_Process目录下执行，则不会出错
     * 所以你要搞明白，fork中的路径相对的是执行脚本时环境所在的pwd
     */
    let work = path.resolve(__dirname, './fork/work.js');
    console.info(work);
    fork(work);
}

/* 通过fork方法实现进程之间的通讯 */
/* 需要利用到child.send()方法 */
/* 注意：child.send方法是同步的，所以先打印子进程发来的消息 */
let sub_process_file = path.resolve(__dirname, './fork/subProcess.js');
let sub_process = fork(sub_process_file);

sub_process.send({ main: 'sub' });

sub_process.on('message', (m) => {
    console.info('This Main Process Has Accept A Message: ' + m);
})