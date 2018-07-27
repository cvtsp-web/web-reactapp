import Request from "../utils/request"

const initialState = {
    getPredefinedInfoPage: []
}

/**
 * 查找车辆预定义表格数据
 * @param {*} params 
 */
export const API_getPredefinedInfoPage = (params) => {
    return async dispatch => {
        const results = await Request({
            url: 'api/predefinedinfo/getPredefinedInfoPage',
            params
        });

        results.flag 
        ? dispatch({type: 'GET_PREDEFINEDFINO_PAGE', payload: results.data.records}) 
        : dispatch({type: 'GET_PREDEFINEDFINO_PAGE', payload: []}); 
        return results;
    }
}

export default function(state=initialState, action) {
    switch(action.type) {
        case 'GET_PREDEFINEDFINO_PAGE':
        const data = action.payload;
        return {
            ...state,
            getPredefinedInfoPage: state.getPredefinedInfoPage.concat(data)
        }
        // 默认
        default:
        return state;
    }
}