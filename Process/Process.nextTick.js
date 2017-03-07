/*
 * @CreateTime: Mar 7, 2017 8:10 AM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 7, 2017 8:11 AM
 * @Description: process.nextTick
 */

/**
 * process.nextTick用于完成异步操作的执行，效率
 * 要比setTimeout方法高很多
 * 下面这个程序就是用来比较这个效率差异的
 */

console.time('TimerB');
console.info('use-setTimeout: ');
setTimeout(() => {
    console.info('nextTick callback 2');
}, 0);
console.info('enduse-setTimeout');
console.timeEnd('TimerB')

console.time('TimerA');
console.info('use-process.nextTick: ');
process.nextTick(() => {
    console.info('nextTick callback 1');
});
console.info('enduse-process.nextTick');
console.timeEnd('TimerA');

/**
 * 我们知道Node.js是单线程执行的，出了系统的I/O之外，在其事件轮询过程中，同一时间只会
 * 处理一个事件。也就是说无论用户电脑有多少个CPU核心，也无法同时并行地处理多个事件。
 * 然而，恰恰是Node.js的这种特性使得其更适合处理I/O型应用（能保证读写一致，无需锁），
 * 却不适合诸如CPU运算型的应用，在每个I/O型的应用中，开发者只需给每个输入、输出定义
 * 一个回调函数即可，系统会自动将其加入到事件轮询的处理队列中。
 */