/*
 * @CreateTime: Mar 4, 2017 1:42 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 4, 2017 1:45 PM
 * @Description: Url format Function
 */

const url = require('url');

let a_url = "https://segmentfault.com/p/1210000008517649/read/";

/**
 * first you should get parse result
 */
let parsed_a_url = url.parse(a_url);
console.info('url.format(parsed_a_url) is: ');
console.info(url.format(parsed_a_url));