/*
 * @CreateTime: Mar 6, 2017 11:13 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 7, 2017 7:20 AM
 * @Description: stdin stdout
 */

/**
 * Stdin:
 * console.info/console.log都是通过
 * 封装process的stdout.write实现的,
 * 只不过console.log在封装的时候，在结尾
 * 多加了一个换行符
 */
process.stdout.write("what do you see?");
console.info();

console.info('console.info封装了process.stdout.write()方法，我们可以重新封装一个');
console.info = (d) => {
    process.stdout.write('process.stdout.write: ' + d + '\n');
}
console.info("Hello Process");

/**
 * Stderr:
 * 通过一个读取本地文件的例程，演示
 * process.stderr.write实现标准错误流
 */
const fs = require('fs');
let file = fs.readFile('noExistFile.js', 'UTF-8', (err, data) => {
    if (err) {
        setTimeout(() => {
            // 这里如果使用process.stdout，结果一样
            process.stderr.write(`err: ${err}\n`);
        }, 3000);
    } else {
        console.info(data);
    }
});

/**
 * Stdin:
 * 观测process.stdin.read
 * 如何实现标准输入流
 */
process.stdin.setEncoding('UTF-8');
// 通过为process.stdin对象注册readable事件，实现输入流回调函数
process.stdin.on('readable', () => {
    let chunk = process.stdin.read(); // 读取命令交互界面输入内容
    if (chunk !== null) {
        process.stdout.write(`Print Data: ${chunk}\n`); // 打印输出
    }
});

/**
 * 结束控制台输入事件
 * ctrl + D 能触发
 */
process.stdin.on('end', () => {
    process.stdout.write(`end\n`);
});