/*
 * @CreateTime: Mar 28, 2017 9:35 AM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 28, 2017 10:13 AM
 * @Description: 文件相关的操作，存在与否，读写，追加写，监测文件变化
 */
const fs = require('fs');

/**
 * 判断文件是否存在
 * fs.exists()
 * fs.existsSync()
 *
 * 读取文件
 * fs.readFile()
 * fs.readFileSync()
 */
if (fs.existsSync('temp/123-sync.txt')) {
    let fileContent = fs.readFileSync('temp/123-sync.txt', 'utf-8');
    console.info(fileContent);
}

/**
 * 功能增强的读文件操作
 * fs.read()
 * fs.readSync()
 */
let container = new Buffer(8)
let fd = fs.openSync('temp/123-sync.txt', 'r'); // r表示读
let lenth = fs.readSync(fd, container, 2, 6, 1); // 返回的是长度
console.info(container);
console.log(container.toString('utf8'));

/**
 * 写文件
 * fs.writeFile()
 * fs.writeFileSync()
 * 可以实现偏移量写入和追加写入
 */
if (fs.existsSync('temp/123-sync.txt')) {
    let fileContent = fs.readFileSync('temp/123-sync.txt', 'utf-8');
    console.info(fileContent);
    // 往现有文件中写入数据
    fs.writeFileSync('temp/123-sync.txt', '12345', 'utf-8');
    let afterWriteContent = fs.readFileSync('temp/123-sync.txt', 'utf-8');
    console.info(afterWriteContent);
}

/**
 * 功能增强的写文件操作
 * fs.write()
 * fs.writeSync()
 */
let buf = new Buffer('fs.writeSync(fd, buffer, offset, length[,position])\n');
let fd2 = fs.openSync('temp/124-async.txt', 'w') // w表示写
fs.writeSync(fd2, buf, 0, buf.length, 0); //最后的position必须是文件中存在的位置

/**
 * 追加写入文件
 * fs.appendFile()
 * fs.appendFileSync()
 * 再追加文件不存在的时候，会直接创建该文件
 */
fs.appendFileSync('temp/123-sync.txt', 'hello nodejs', 'utf-8')

/**
 * 检测文件或文件路径变化
 * fs.watchFile() 关注文件内容本身的改变
 * fs.watch() 关注文件路径名称等的改变
 * 该方法并不完全是跨平台的，需谨慎使用
 */
fs.watchFile('temp/123-sync.txt', (curr, prev) => {
    console.info('the current mtime is: ' + curr.mtime);
    console.info('the previous mtime is: ' + prev.mtime);

    fs.watch('temp/123-sync.txt', (event, filename) => {
        console.info('the event is: ' + event);
        console.info('the filename is: ' + filename);
    })
})