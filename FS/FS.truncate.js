/*
 * @CreateTime: Mar 27, 2017 10:16 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 27, 2017 10:26 PM
 * @Description: 修改文件长度, 方法雷同ftruncate，只不过它可以直接操作路径
 */
const fs = require('fs');

fs.truncate('temp/truncate.txt', 7, (err) => {
    if (err) throw err;
    console.info('finish async truncate');
    fs.truncateSync('temp/truncate.txt', 4);
})