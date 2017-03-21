/*
 * @CreateTime: Mar 17, 2017 10:52 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 18, 2017 10:50 AM
 * @Description: Buffer裁剪
 */
let buf = new Buffer(26);
for (let i = 0; i < 26; i++) {
    buf[i] = 97 + i;
}
let buf_slice_a = buf.slice(0, 5); //从位置0开始到位置5，直接切割，然后返回16进制内容
console.info(buf_slice_a); // 打印<Buffer 61 62 63 64 65>
console.info(`${buf}`);
console.info(`buf_slice_a is: ${buf_slice_a}`); // 打印buf_slice_a is: abcde，因为有字符串连接，最终转换成了字符串