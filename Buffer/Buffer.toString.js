/*
 * @CreateTime: Mar 17, 2017 10:53 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 18, 2017 10:37 AM
 * @Description: Buffer与字符串之间的转换
 */
let buf = new Buffer(26);

for (let i = 0; i < 26; i++) {
    buf[i] = i + 97;
}

console.info(`buf.toString('ascii'): ${buf.toString('ascii')}`);
console.info(`buf.toString('ascii', 0, 5): ${buf.toString('ascii', 0, 5)}`);
console.info(`buf.toString('utf8', 0, 5): ${buf.toString('utf8', 0, 5)}`);
console.info(`buf.toString('hex', 0, 5): ${buf.toString('hex', 0, 5)}`);