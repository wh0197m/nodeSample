/*
 * @CreateTime: Mar 20, 2017 6:00 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 20, 2017 6:13 PM
 * @Description: String Parse Module
 */
exports.parse = function parse(data) {
    let lines = data.toString('ascii').split('\n');
    let cut, name, host;
    for (let i = 0, len = lines.length; i < len; i++) {
        cut = lines[i].split(':');
        name = cut[0];
        if (name === 'Host') {
            if (cut[1] === undefined) {
                return 'Host header not found';
            }
            host = cut[1].trim().toLowerCase();
            return host
        }
    }
    return null;
};