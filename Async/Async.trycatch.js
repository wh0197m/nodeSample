/*
 * @CreateTime: Mar 5, 2017 11:59 AM
 * @Author: wh01am
 * @Contact: wh0197m@gmail.com
 * @Last Modified By: wh01am
 * @Last Modified Time: Mar 5, 2017 12:09 PM
 * @Description: How to catch error in async call
 */

/**
 * Right
 * you can catch error by this way
 */
setTimeout(() => {
    try {
        let data = b / 0;
    } catch (error) {
        console.info('catch error by the second way:\n')
        console.info(error);
    }
}, 5000)

console.info();

/**
 * Wrong!
 * you can't catch anything by this way
 */
try {
    setTimeout(() => {
        let data = a / 0;
    }, 5000)
} catch (error) {
    console.info(error)
};