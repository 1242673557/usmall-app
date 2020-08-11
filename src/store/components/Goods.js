import {getIndexGoods} from "../../util/request"
//状态
const initState={
   Goods:[],//首页列表
}


//action creator 
const  changeGoodsAction=(arr)=>{
    return {type:"changeGoods",list:arr}
}// 首页


export const requestGoodsAction=()=>{
    // 如果在一个action creator中要处理异步操作，需要return一个函数
   return (dispatch,getState)=>{
         // 发请求
         const {Goods} = getState()
         if(Goods.length>0){
             return
         }
    getIndexGoods().then(res=>{
        dispatch(changeGoodsAction(res.data.list[0].content))
    })
   }
}// 首页

//reducer
const reducer=(state=initState,action)=>{
    switch(action.type){
        case "changeGoods":
            // {type:"changeGoods",list:数据}
            return {
                ...state,
                Goods:action.list
            }
        default:
            return state;
    }
} 


//导出状态
export const Goods = (state) => state.Goods

export default reducer