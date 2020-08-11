import { getCatetree } from "../../util/request"
//状态
const initState = {
    Catetree: [],//分类列表 
}


//action creator 
const changeCatetreeAction = (arr) => {
    return { type: "changeCatetree", list: arr }
}

export const requestCatetreeAction = () => {
    return (dispatch, getState) => {
        // 发请求
        const { Catetree } = getState()
        if (Catetree.length > 0) {
            return
        }
        getCatetree().then(res => {
            dispatch(changeCatetreeAction(res.data.list))
        })
    }
}//分类


//reducer
const reducer = (state = initState, action) => {
    switch (action.type) {
        // 修改分类列表
        case "changeCatetree":
            return {
                ...state,
                Catetree: action.list
            }
        default:
            return state;
    }
}


//导出状态
export const Catetree = (state)=>state.Catetree

export default reducer