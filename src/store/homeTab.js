import Request from '@/utils/request'

const initialState = {
    menus: []
}

/**
 * 查找菜单数据
 * @param {null} params=null 
 */
export const API_findMenusTree = function(params) {
    return async dispatch => {
        const results = await Request({
            url: 'api/rolemenu/findMenuTree'
        });
        dispatch({ type: 'FIND_MENUS', payload: results });
        return results;
    }
}

export default function(state=initialState, action) {
    switch(action.type) {
        // 查询菜单数据
        case 'FIND_MENUS': 
        const { data } = action.payload;
        const results = data ? data.find(val => { return Number(val.id) === 2 }).child : [];
        
        return {
            ...state,
            menus: results
        }
        
        // 默认
        default: 
        return state;
    }
}
