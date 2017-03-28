/*
 * @CreateTime: Mar 20, 2017 5:58 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 20, 2017 6:17 PM
 * @Description: main call file
 */

const buffer_parse = require('./buffer_parse').parse;
const string_parse = require('./string_parse').parse;

let data = new Buffer();

console.info("buffer_parse(data): " + buffer_parse(data));
console.info();

console.info("string_parse(data): " + string_parse(data));
console.info();

var start = new Date();
for (var i = 0; i < 10000; i++) {
    buffer_parse(data);
}
console.info('buffer_parse take: ' + (new Date() - start) + 'ms');

var start = new Date();
for (var i = 0; i < 10000; i++) {
    string_parse(data);
}
console.info('buffer_parse take' + (new Date() - start) + 'ms');