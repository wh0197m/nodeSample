/*
 * @CreateTime: Mar 5, 2017 10:25 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 5, 2017 11:00 PM
 * @Description: Async Queue Function
 */

const async = require('async');

/**
 * syntax: async.queue(worker, concurrency)
 * queue函数可以认为是一个加强版本的parallel函数
 * 其功能实际上是一个串行的消息队列，通过限制了worker
 * 数量，不再一次性全部执行。当work数量不够用的时候，
 * 新加入的任务将会排队等候，知道有新的worker可用。
 * 该函数有多个点可供回调，如work用完时、无等候任务时、
 * 全部执行完时等。
 */

/**
 * 定义一个queue，设定worker为2
 */
let queue = async.queue((task, cb) => {
    console.info('worker is preocessing task: ', task.name);
    cb();
}, 2)

/**
 * 独立加入5个任务
 */
queue.push({ name: 'xiaoming' }, (err) => {
    console.info('finsihed processing by xiaoming');
});

queue.push({ name: 'xiaowang' }, (err) => {
    console.info('finsihed processing by xiaowang');
});

queue.push({ name: 'xiaohong' }, (err) => {
    console.info('finsihed processing by xiaohong');
});

queue.push({ name: 'xiaogang' }, (err) => {
    console.info('finsihed processing by xiaogang');
});

queue.push({ name: 'xiaoling' }, (err) => {
    console.info('finsihed processing by xiaoling');
})

/**
 * listen: 当最后一个任务交给worker时，将调用该函数
 */
queue.empty = () => {
    console.info('no more task need excute');
}

/**
 * listen: 当所有任务执行完成以后，将调用该函数
 */
queue.drain = () => {
    console.info('all tasks has done')
}