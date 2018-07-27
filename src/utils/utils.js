/**
 * 首字母转换小写
 * @param {Stirng} str 
 * @return {String}
 */
export const initialLowerCase = function(str) {
    return str.charAt(0).toLowerCase() + str.substring(1);
}