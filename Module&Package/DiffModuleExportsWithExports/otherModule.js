/*
 * @CreateTime: Mar 4, 2017 11:28 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 5, 2017 12:29 AM
 * @Description: module.exports vs exports
 */

/**
 * 这里不可以使用箭头函数
 */
module.exports = function(name, age) {
    this.name = name;
    this.age = age;
    this.info = function() {
        return (this.name + ' is ' + this.age + ' years old');
    }
};

/**
 * 下面的otherInfo，在main调用后却只能输出undifined，为啥呢？
 * 其实，module.exports才是module模块的真正接口，而exports
 * 可以理解为它的一个副本，虽然修改exports对象的时候，也会修改module.exports
 * 对象，但最终返回给调用的是module.exports对象而不是exports对象。
 * 因此，当module.exports对象通过[赋值方式]进行设定后，已经和
 * exports对象指向的变量不同了，这时，不论exports对象怎么修改
 * 都已经与module.exports对象没有关系了，看如下：
 *
 * module.exports = Module
 * exports = Module
 *
 * 无特殊情况，建议统一使用exports
 */
exports.otherInfo = function() {
    return (this.name + ' is ' + this.age + ' years old by exports')
};