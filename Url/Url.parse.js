/*
 * @CreateTime: Mar 4, 2017 1:24 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 4, 2017 1:41 PM
 * @Description: Url parse Function
 */

const url = require('url');

let a_url = "https://segmentfault.com/p/1210000008517649/read";
console.info('typeof url.parse(a_url) is: ' + typeof url.parse(a_url));
console.info();

console.info("If you put a string and an object together, it will output this: ")
console.info("console.info('url.parse(a_url) is: ' + url.parse(a_url))");
console.info("url.parse(a_url) is: " + url.parse(a_url));
console.info();

console.info("If you print a single object, it will output this: ")
console.info("console.info(url.parse(a_url))")
console.info(url.parse(a_url));