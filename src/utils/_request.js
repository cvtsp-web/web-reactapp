/**
 * @fileOverview: 请求接口方法
 * @param {Object} options={url, method, params, data, response, credentials}
 * @return {Promise}
 */
export default function request({
    url,
    method='POST',
    params,
    data,
    response,
    headers,
    credentials
}) {
    if(params) {
        url = url + querystring_parse(params);
    }

    return fetch(url, {
        method,
        headers: Object.assign({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }, headers),
        credentials,
        params,
        body: data
    })
    .then(res => {
       return res.json();
    })
    .then(res => {
        return res;
    })
}

/**
 * @fileOverview: 对象转换stirng
 * @param {*} obj 
 */
function querystring_parse(obj) {
    if(typeof obj !== 'object') return;

    let str = '?';
    Object.keys(obj).forEach(val => {
        str += `${val}=${obj[val]}&`;
    });
    return str.substring(0, str.length-1);
}