import Request from "../utils/request";

const initialState = {
    user_messages: {}
}

export const API_login = function(params) {
    return async dispatch => {
        const { flag, data } = await Request({
            url: 'api/login',
            params: {
                enterpriseCode: 111111111,
                account: 'admin',
                password: `18f4f4d01f8ec4393a12e25521980cb26ad0484783ec6fdc431cc51a8aed71e5385bd22e691736cc504df19a10e6296487d6bd0f2be9e4215a910690162530b8`,
                language: 'zh_CN'
            }
        });
        flag && dispatch({ type: 'SAVE_USER_MESSAGE', playload: data });
        return Promise.resolve(flag);
    }
}

export default function(state=initialState, action) {
    switch(action.type) {
        // 保存用户信息
        case 'SAVE_USER_MESSAGE':
        const { token, userInfo } = action.playload;
        localStorage.setItem('token', token);

        return {
            ...state,
            user_messages: userInfo
        };

        // 默认
        default:
        return state;
    }
}