/*
 * @CreateTime: Mar 14, 2017 9:34 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 14, 2017 10:13 PM
 * @Description: Define and Init Buffer
 */

/**
 * Define a Buffer by array
 */
let a_buffer = new Buffer([0x6e, 0x6f, 0x64, 0x65, 0x6a, 0x73]);
console.info(`The variable a_buffer's length is ` + a_buffer.length); // print 6
console.info(`The variable a_buffer is ${a_buffer}`); // print nodejs

/**
 * Read buffer by array index
 * You should notice that console will output decimal base content
 */
for (let i = 0; i < a_buffer.length; i++) {
    let char = a_buffer[i];
    console.info(`a_buffer[${i}] is ${a_buffer[i]}`); //这个地方要注意，最终会将16进制转换为10进制输出
    console.info(`a_buffer[${i}].toString is ${a_buffer[i].toString()}`);
}
console.info(a_buffer.toString()); // nodejs
console.info(a_buffer.toString('utf8')); // nodejs
console.info(a_buffer.toString('hex')); // 6e6f64656a73

/**
 * Define a Buffer with utf8 encode
 */
let b_buffer = new Buffer('nodejs', 'utf8');
console.info(`The variable b_buffer's length is ${b_buffer.length}`);
console.info(`The variable b_buffer is ${b_buffer}`);

for (let i = 0; i < b_buffer.length; i++) {
    let char = b_buffer[i];
    console.info(`a_buffer[${i}] is ${b_buffer[i]}`);
    console.info(`a_buffer[${i}].toString is ${b_buffer[i].toString()}`);
}

console.info(b_buffer.toString('utf8')); // nodejs
console.info(b_buffer.toString('hex')); // 6e6f64656a73

/**
 * 上述几段代码说明NodeJS框架对Buffer对象的定义默认编码就是utf8
 * 第二个，NodeJS的编码格式有：ascii utf8 utf16le base64 binary hex
 */

/**
 * 上述两种方法分别通过数组和字符串的形式定义了buffer
 * 下面通过先定义Buffer大小，后续在去定义内容
 * buffer.write(string, [offset], [length], [encoding]);
 * 其中offset: 默认为0
 * length默认为：buffer.length - offset
 */
let c_buffer = new Buffer(16);
console.info(`variable c_buffer's length is ${c_buffer.length}`);
console.info(`variable c_buffer is ${c_buffer}`); // 每次都应该不会一样，都是随机的

c_buffer.write('This is c_buffer', 0, 'utf8');
console.info(`variable c_buffer's length is ${c_buffer.length}`);
console.info(`variable c_buffer is ${c_buffer}`);