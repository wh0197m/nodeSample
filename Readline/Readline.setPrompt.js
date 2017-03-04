/*
 * @CreateTime: Mar 4, 2017 3:15 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 4, 2017 3:46 PM
 * @Description: Readline setPrompt Function
 */

/**
 * An Easy CLI
 */
const readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('AN_EASY_CLI\n>');
rl.prompt();

rl.on('line', (line) => {
    switch (line.trim()) {
        case 'name':
            console.log('who1am');
            break;
        case 'age':
            console.log('37');
            break;
        case 'agenda':
            console.log('male');
            break;
        default:
            console.log(`I can't resolve your key word!`);
            break;
    }
    rl.prompt();
}).on('close', () => {
    console.info('Good Bye');
    process.exit(1);
})