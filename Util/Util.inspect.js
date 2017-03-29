/*
 * @CreateTime: Mar 29, 2017 9:58 AM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 29, 2017 10:07 AM
 * @Description: 需要将不同类型的对象统一转换为字符串格式
 */
const util = require('util');

function Person() {
    this.name = 'person';
    this.toString = function() {
        return this.name
    }
}

let instance = new Person();
console.info(util.inspect(instance));

// 加上true，可以将对象不可枚举的信息一并输出
console.info(util.inspect(instance, true));