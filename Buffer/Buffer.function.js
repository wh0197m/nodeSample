/*
 * @CreateTime: Mar 15, 2017 9:50 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 17, 2017 10:49 PM
 * @Description: Handle Buffer
 */

let a_buffer = new Buffer([0x6e, 0x6b]);
console.info(`variable a_buffer is ${a_buffer.toString()}`); // nk

/**
 * Tests if obj is a buffer
 * syntax: Buffer.isBuffer(obj);
 */
console.info(`Buffer.isBuffer(a_buffer) is ${Buffer.isBuffer(a_buffer)}`);

/**
 * Tests if obj is a valide encoding
 * syntax: Buffer.isEncoding('utf8');
 */
console.info(`Buffer.isEncoding(a_buffer) is ${Buffer.isEncoding(a_buffer)}`);
console.info(`Buffer.isEncoding('utf8') is ${Buffer.isEncoding('utf8')}`);

/**
 * get the byte length of a buffer
 * syntax: Buffer.byteLength()
 */
console.info(`Buffer.byteLength(a_buffer) is ${Buffer.byteLength('yes', 'utf8')}`);
let specialString = '\u00bd + \u00bc = \u00be';
console.info('\\u00bd+\\u00bc=\\u00be means s%', specialString);
console.info('The Truely Length of specialString is ' + Buffer.byteLength(specialString)); //12个字节长度
console.info('Not Correct Length of specialString is ' + specialString.length); //9个字符长度，一个字符有时是1个字节，有时候是双字节