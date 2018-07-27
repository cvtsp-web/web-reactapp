import { Toast } from 'antd-mobile'

/**
 * @fileOverview: 表单错误验证提示
 * @param {Object} options: {
 *  field: {errors: []}
 *  field: {errors: []}
 * } 
 * @return {Toast} 提示组件
 */
export const errorTips = function(options) {
    const keys = Object.keys(options);
    
    for(let i = 0; i < keys.length; i++) {
        let errorTips = options[keys[i]];
        return (errorTips && errorTips.errors) 
        && Toast.info( errorTips.errors[0].message, 1);  
    }
}