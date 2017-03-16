/*
 * @CreateTime: Mar 12, 2017 11:11 AM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 12, 2017 11:20 AM
 * @Description: 接受其他进程传过来的消息
 */
process.on('message', (m) => {
    console.info('Accept Message From Other Process: ' + m.main);
});
process.send("This Message From Child");