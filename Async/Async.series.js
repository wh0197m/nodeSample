/*
 * @CreateTime: Mar 5, 2017 9:05 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 5, 2017 9:20 PM
 * @Description: Async Series Function
 */

/**
 * you should install async first
 * async.series make sure you execute
 * your function one by one in order
 * in other work, it make program synchronise
 */
const async = require('async');

/**
 * syntax: async.series(tasks, callback);
 * tasks parameter could be Array or JSON
 * Array style:
 */
async.series([
    function(callback) {
        callback(null, 'hello');
    },
    function(callback) {
        callback(null, 'async');
    },
    function(callback) {
        callback(null, 'series');
    }
], (err, result) => {
    console.info(result);
});

/**
 * JSON style:
 */
async.series({
    one: function(callback) {
        callback(null, 'hello');
    },
    three: function(callback) {
        callback(null, 'series');
    },
    two: function(callback) {
        callback(null, 'async');
    }
}, (err, result) => {
    console.info(result);
})

/**
 * 在引用Async流程库的过程中，async.series()函数
 * 完全严格按照串行流程来执行的，从这层意义上说，它
 * 完成的是同步操作的功能
 */