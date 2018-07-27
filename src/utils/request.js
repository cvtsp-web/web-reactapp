import request from './_request'
import { Toast } from 'antd-mobile'
import { Control } from 'react-keeper'

/**
 * 
 * @param {*} options 
 */
export default async function Request(options) {
    try {
        Toast.loading('正在加载...');
        const results = await request({
            ...options,
            credentials: 'include',
            headers: Object.assign({
                'token': localStorage.getItem('token')
            }, options.headers)
        });
        
        Toast.hide();
        if(!results.flag) {
            Toast.info('查询数据失败!');
            if(results.errorCode === 401) {
                return Control.go('/');
            }
        };
        return results;
    } catch (error) {
        Toast.info('网络异常!');
    }
    
}