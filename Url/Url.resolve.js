/*
 * @CreateTime: Mar 4, 2017 1:51 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 4, 2017 1:55 PM
 * @Description: Url resolve Function
 */

const url = require('url');

console.info(url.resolve('https://segmentfault.com/p/1210000008517649/read', 'yes'));
console.info(url.resolve('https://segmentfault.com/p/1210000008517649/read/', 'yes'));
console.info(url.resolve('https://segmentfault.com/p/1210000008517649/read', '/yes'));
console.info(url.resolve('https://segmentfault.com/p/1210000008517649/read/', '/yes'));

console.info(url.resolve('/article/web/js', 'angular'));
console.info(url.resolve('/article/web/js/', 'angular'));
console.info(url.resolve('/article/web/js', '/angular'));
console.info(url.resolve('/article/web/js/', '/angular'));