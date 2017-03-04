/*
 * @CreateTime: Mar 4, 2017 3:08 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 4, 2017 3:14 PM
 * @Description: Readline write Function
 */

const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.write('Delete me by using combo key "ctrl + u" in 5s');
setTimeout(() => {
    // syntax: readline.write(data, [key]), key must be an object
    rl.write(null, { ctrl: true, name: 'u' });
}, 5000)