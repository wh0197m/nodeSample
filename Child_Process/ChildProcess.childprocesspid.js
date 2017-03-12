/*
 * @CreateTime: Mar 12, 2017 9:39 AM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 12, 2017 9:43 AM
 * @Description: get child process pid
 */
const spawn = require('child_process').spawn;

let node_process = spawn('grep', ['node']);
let top_process = spawn('grep', ['top']);

console.info('Spawned child pid of node: ' + node_process.pid);
node_process.stdin.end();

console.info('Spawned child pid of top: ' + top_process.pid);
top_process.stdin.end();