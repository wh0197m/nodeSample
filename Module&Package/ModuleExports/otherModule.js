/*
 * @CreateTime: Mar 4, 2017 10:51 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 4, 2017 10:54 PM
 * @Description: depend on events module
 */

const EventEmitter = require('events').EventEmitter;
module.exports = new EventEmitter();

/**
 * the current module will emit 'ready' events
 * from itself after 5s
 */
setTimeout(() => {
    module.exports.emit('ready');
}, 5000)