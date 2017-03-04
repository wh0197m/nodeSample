/*
 * @CreateTime: Mar 4, 2017 1:56 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 4, 2017 2:07 PM
 * @Description: querystring parse Funciton
 */

const url = require('url');
const querystring = require('querystring');

let a_url = "https://segmentfault.com/index/?name=wh01am&age=37";

console.info('querystring.parse("https://segmentfault.com/index/?name=wh01am&age=37") is: ');
console.info(querystring.parse(a_url));
console.info();

console.info('typof querystring.parse("https://segmentfault.com/index/?name=wh01am&age=37") is: ');
console.info(typeof querystring.parse(a_url));
console.info();

/**
 * querystring.parse return an object
 */
let parsed_a_url = url.parse(a_url).query;
console.info('querystring.parse(url.parse("https://segmentfault.com/index/?name=wh01am&age=37").query) is: ');
console.info(querystring.parse(parsed_a_url));
console.info();