/*
 * @CreateTime: Mar 20, 2017 5:59 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 20, 2017 6:07 PM
 * @Description: Buffer Parse Module
 */
let SPACE = 0x20,
    COLON = 0x3a, //冒号
    NEWLINE = 0x0a,
    ENTER = 0x0d;

exports.parse = function parse(data) {
    let line_start = 0,
        len = data.length;
    for (let i = 0; i < len; i++) {
        if (data[i] === COLON) {
            let key = data.toString('ascii', line_start, i).toLowerCase();
            i++; // skip COLON
            if (key === 'host') {
                let value_start = i;
                while (i < len) {
                    if (data[i] === ENTER) {
                        return data.toString('ascii', value_start, i).trim().toLowerCase();
                    }
                    i++;
                }
            }
        } else if (data[i] === Enter && data[i + 1] === NEWLINE) {
            i += 2;
            line_start = i;
            if (data[i] === ENTER && data[i + 1] === NEWLINE) {
                // \r\n\r\n
                return 'Host header not found'
            }
        }
    }
    return null;
}