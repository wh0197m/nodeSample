/*
 * @CreateTime: Mar 17, 2017 10:52 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 18, 2017 12:35 PM
 * @Description: Buffer拼接
 */
let buf = new Buffer('This is a buffer concat');
let concatStr = 'This is a buffer concat';

/* Buffer Concat vs String Concat */
console.time('Buffer concat test');
let list = [];
let len = 100000 * buf.length;
for (let i = 0; i < 100000; i++) {
    list.push(buf);
    len += buf.length;
}
/**记住提供Buffer.concat(list, totalLen)的参数非常有用
 * 可以避免执行额外循环来计算长度，增加不必要的性能开销
 * totalLen不是数组长度啊！！！是Buffer实例大小总和
 */
let s1 = Buffer.concat(list, len).toString();
console.timeEnd('Buffer concat test');
console.info();

console.time('String concat test');
let list2 = [];
for (let i = 100000; i >= 0; i--) {
    list2.push(concatStr);
}
let s2 = list.join("");
console.timeEnd('String concat test');