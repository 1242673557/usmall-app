import {getgoodsinfo} from "../../util/request"
//状态
const initState={
    GoodsDetail:{}//商品详情
}


//action creator 
const changeGoodsDetailAction=(obj)=>{
    return {type:"changeGoodsDetail",detail:obj}
}

export const requestGoodsDetailAction=(id)=>{
    return (dispatch,getState)=>{
        // 获取详情
        getgoodsinfo({id:id}).then(res=>{
            dispatch(changeGoodsDetailAction(res.data.list[0]))
        })
    }
}


//reducer
const reducer=(state=initState,action)=>{
    switch(action.type){
             // 修改商品详情
             case "changeGoodsDetail":
                return{
                    ...state,
                    GoodsDetail:action.detail
                }
        default:
            return state;
    }
} 



//导出状态
export const GoodsDetail=(state)=>state.GoodsDetail

export default reducer