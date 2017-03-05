/*
 * @CreateTime: Mar 5, 2017 9:40 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 5, 2017 9:54 PM
 * @Description: Async parallel Function
 */

const async = require('async');

/**
 * syntax: async.parallel(tasks, [callbacks]);
 * 并行流程控制，parallel函数可以让多个函数立即并行执行，
 * 即同时执行，不需要等待其它函数先执行
 * 第一个参数同样可以是JSON或Array
 */
async.parallel([
    (cb) => {
        setTimeout(() => {
            cb(null, 'one');
        }, 5000)
    },
    (cb) => {
        setTimeout(() => {
            cb(null, 'two');
        }, 5000)
    }
], (err, result) => {
    console.info(result);
})

/**
 * async.parallel函数传给callback数组中的数据
 * 是按照tasks中声明的顺序，而不是执行完成顺序
 */