/*
 * @CreateTime: Mar 4, 2017 10:44 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 4, 2017 10:51 PM
 * @Description: Module.Exports
 */

/**
 * 在Node.js中，module.exports才是module模块公开的接口
 * 每个模块都会自动创建一个module对象，对象有一个exports的
 * 属性，初始值是个空对象{}，module的公开接口就是这个属性——exports
 */

const otherModule = require('./otherModule.js');
otherModule.on('ready', () => {
    console.info('the otherModule.js was ready');
    console.info();
})