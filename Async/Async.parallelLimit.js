/*
 * @CreateTime: Mar 5, 2017 9:54 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 5, 2017 9:58 PM
 * @Description: Async paralleLimit Function
 */

const async = require('async');

async.parallelLimit([
        (cb) => {
            setTimeout(() => {
                cb(null, 'one')
            }, 5000)
        },
        (cb) => {
            setTimeout(() => {
                cb(null, 'two')
            }, 5000)
        },
        (cb) => {
            setTimeout(() => {
                cb(null, 'three')
            }, 5000)
        },
    ],
    /**
     * 这里的2就是parallelLimit特别的地方
     * 它限定了最多并行两个任务同时执行
     */
    2,
    (err, result) => {
        console.info(result);
    })