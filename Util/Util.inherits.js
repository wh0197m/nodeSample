/*
 * @CreateTime: Mar 29, 2017 9:43 AM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 29, 2017 9:53 AM
 * @Description: 实现原型对象的继承
 */
const util = require('util');

/**
 * syntax: util.inherits(constructor, superConstructor);
 *
 * 使用util.inherits()继承方法时，基类构造函数内部创造的属性和方法
 * 均不会被子类所继承，只有通过原型方法创建的属性和方法才会被子类所继承
 */

function Base() {
    this.name = 'nodejs';
    this.year = 2017;
    this.sayFunc = function(target) {
        console.info(`hello, ${target}`);
    }
}

Base.prototype.showName = function() {
    console.info(this.name);
}

Base.prototype.showYear = function() {
    console.info(this.year);
}

/**
 * 定义原型子类
 */
function Child() {
    this.name = 'child';
}

util.inherits(Child, Base);

let childInstance = new Child();
childInstance.showName();
childInstance.showYear();
// childInstance.sayFunc(); 无法继承这个构造函数内部的内容