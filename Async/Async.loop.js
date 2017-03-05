/*
 * @CreateTime: Mar 5, 2017 10:01 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 5, 2017 10:24 PM
 * @Description: Async Loop Control
 */
const async = require('async');

let count = 0;

/**
 * Define JSON Array
 * @type {{name: string, age:number}[]}
 */
let userList = [
    { name: 'xiaoming', age: 12 },
    { name: 'xiaoqiang', age: 13 },
    { name: 'xiaowang', age: 14 },
    { name: 'xiaohong', age: 15 }
];

/**
 * syntax: async.whilst(judagement, fn, cb);
 * whilst函数相当于while语句，但是区别是其中的异步调用
 * 将在完成后才会进如下一次循环中，因此当需要循环异步操作
 * 时候，该函数是非常实用的
 * async.until函数与async.whilst函数在循环逻辑上相反，
 * 当judagement为false时，until才会继续执行循环，其他
 * 方面就完全一样了
 */
async.whilst(
    () => {
        return count < 4
    },
    (cb) => {
        console.info(count);
        userList[count].age += 1;
        count++;
        setTimeout(cb, 2000);
    },
    (err) => {
        console.info(count);
        console.info(userList);
    }
)

/**
 * syntax: async.doWhilst(fn, judagement, cb)
 * fn must excute at least once
 */
async.doWhilst(
    (cb) => {
        console.info(count);
        userList[count].age += 1;
        count++;
        setTimeout(cb, 2000);
    },
    () => {
        return count < 4
    },
    (err) => {
        console.info(count);
        console.info(userList);
    }
)