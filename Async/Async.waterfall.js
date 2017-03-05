/*
 * @CreateTime: Mar 5, 2017 9:20 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 5, 2017 9:39 PM
 * @Description: Async Waterfall Function
 */

const async = require('async');

/**
 * syntax: async.waterfall([tasks], callback)
 * waterfall和series函数在功能上有很多相似之处，基本上
 * 都是按照顺序依次执行一组函数，但不同之处是通过waterfall
 * 这个函数产生的值，都将传给下一个函数，而series函数没有这个功能
 */
async.waterfall([
    (cb) => {
        /**
         * 当回调函数的第一个参数为非空值时候
         * waterfall会停止执行剩余任务
         */
        cb(null, 'data_from_1'); // 如果是cb(1, 1)，则会停止执行
    },
    (data, cb) => {
        console.info(data); // data = 'data_from_1'
        cb('null', 'data_from_2'); // 因为‘null’，所以不再往下执行
    },
    (data, cb) => {
        console.info(data); // data = 'data_from_2'
        cb(null, 'data_from_3');
    }
], (err, result) => {
    console.info(result);
})