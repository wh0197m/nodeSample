/*
 * @CreateTime: Mar 15, 2017 9:50 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 15, 2017 10:30 PM
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
console.info(`Buffer.byteLength(a_buffer) is ${Buffer.byteLength('yes', 'utf8')}`)