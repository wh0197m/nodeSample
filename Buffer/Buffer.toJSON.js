/*
 * @CreateTime: Mar 18, 2017 12:46 PM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 18, 2017 12:54 PM
 * @Description: Buffer toJSON
 */
let buf = new Buffer('test');
let json = JSON.stringify(buf);
console.info(json); //{"type":"Buffer","data":[116,101,115,116]}

let json2 = JSON.stringify(buf.toString());
console.info(json2); //"test"

let copy = JSON.parse(json, (key, value) => {
    return value && value.type === 'Buffer' ? new Buffer(value.data) : value;
});
console.info(copy);