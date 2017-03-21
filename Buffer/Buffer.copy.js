/*
 * @CreateTime: Mar 17, 2017 10:53 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 18, 2017 11:38 AM
 * @Description: Buffer拷贝
 */
let buf1 = new Buffer(26);
let buf2 = new Buffer(26);

for (let i = 0; i < 26; i++) {
    buf1[i] = i + 97;
    buf2[i] = 97;
}

console.info(`${buf1}`);
console.info(`${buf2}`);

/* Node并不提供直接拷贝副本的方式方法 */
buf1.copy(buf2, 0, 0, 5); //Buffer.copy(targeBuffer, targetStart, sourceStart, sourceEnd);
console.info(`${buf1}`);
console.info(`${buf2}`);