/*
 * @CreateTime: Mar 17, 2017 10:49 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 18, 2017 10:33 AM
 * @Description: read & write of Buffer
 */

/**
 * Read Function
 */
let str_read_UInt8 = "";
let str_read_Int8 = "";
let str_read_UInt16_LE = ""; //LE little Endian，从右往左读
let str_read_Int16_LE = "";
let str_read_UInt16_BE = ""; //BE big Endian(字节序)，从左往右读
let str_read_Int16_BE = "";

let buf = new Buffer(4);
buf[0] = 0x6;
buf[1] = 0x8;
buf[2] = 0x23;
buf[3] = 0x57;

console.info();
str_read_UInt8 += 'buf.readUInt8(i) is:';
for (let i = 0; i < buf.length; ++i) {
    str_read_UInt8 += buf.readUInt8(i).toString(16) + "   ";
};
console.info(str_read_UInt8);

console.info();
str_read_Int8 += 'buf.readInt8(i) is:';
for (let i = 0; i < buf.length; ++i) {
    str_read_Int8 += buf.readInt8(i).toString(16) + "   ";
};
console.info(str_read_Int8);

console.info();
str_read_UInt16_LE += 'buf.readUInt16LE(i) is:';
for (let i = 0; i < buf.length - 1; ++i) { //注意这里的length长度减一了
    str_read_UInt16_LE += buf.readUInt16LE(i).toString(16) + "   ";
};
console.info(str_read_UInt16_LE);

console.info();
str_read_Int16_LE += 'buf.readInt16LE(i) is:';
for (let i = 0; i < buf.length - 1; ++i) { //注意这里的length长度减一了
    str_read_Int16_LE += buf.readInt16LE(i).toString(16) + "   ";
};
console.info(str_read_Int16_LE);

console.info();
str_read_UInt16_BE += 'buf.readUInt16BE(i) is:';
for (let i = 0; i < buf.length - 1; ++i) { //注意这里的length长度减一了
    str_read_UInt16_BE += buf.readUInt16BE(i).toString(16) + "   ";
};
console.info(str_read_UInt16_BE);

console.info();
str_read_Int16_BE += 'buf.readInt16BE(i) is:';
for (let i = 0; i < buf.length - 1; ++i) { //注意这里的length长度减一了
    str_read_Int16_BE += buf.readInt16BE(i).toString(16) + "   ";
};
console.info(str_read_Int16_BE);

console.log();
console.info("buf.readUInt32LE(i) is: " + buf.readUInt32LE(0).toString(16));
console.log();
console.info("buf.readUInt32BE(i) is: " + buf.readUInt32BE(0).toString(16));
console.log();
console.info("buf.readInt32LE(i) is: " + buf.readInt32LE(0).toString(16));
console.log();
console.info("buf.readInt32BE(i) is: " + buf.readInt32BE(0).toString(16));


/**
 * Write Function
 * 注意Buffer.Write函数最终会返回一个数字，表示写入的字节数
 */
console.info('>>>>>>>>>>>>>>>>>>>>>>>Write Function<<<<<<<<<<<<<<<<<<');
buf_write = new Buffer(32);
len = buf_write.write('\u00bd + \u00bc = \u00be', 0);
console.log("buf_write.write() usage: " + buf_write.toString('utf8', 0, len) + " , " + len + " bytes");
console.info();

let buf8 = new Buffer(4);
buf8.writeUInt8(0x5, 0);
buf8.writeUInt8(0x6, 1);
buf8.writeUInt8(0x12, 2);
buf8.writeUInt8(0x34, 3);
console.info("buf8.writeUInt8() usage: ");
console.info(buf8);
console.info();

let buf16BE = new Buffer(4);
buf16BE.writeUInt16BE(0x1234, 0);
buf16BE.writeUInt16BE(0xabcd, 2);
console.info("buf16BE.writeUInt16BE() usage: ");
console.info(buf16BE);
console.info();

let buf16LE = new Buffer(4);
buf16LE.writeUInt16LE(0x1234, 0);
buf16LE.writeUInt16LE(0xabcd, 2);
console.info("buf16LE.writeUInt16LE() usage: ");
console.info(buf16LE);
console.info();

let buf32BE = new Buffer(4);
buf32BE.writeUInt32BE(0xfeedface, 0);
console.info("buf32BE.writeUInt32BE() usage: ");
console.info(buf32BE);
console.info();

let buf32LE = new Buffer(4);
buf32LE.writeUInt32LE(0xfeedface, 0)
console.log("bufLE.writeUInt32LE() usage: ");
console.log(buf32LE);
console.info();

/* Buffer.write最终返回的是写入的字节数 */
console.info(buf32LE.writeUInt32LE(0xfeedface, 0));