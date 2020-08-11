import {createStore,applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk"
// import {getIndexGoods,getCatetree,getgoodsinfo} from "../util/request"

import user from "./components/user"
import Goods from "./components/Goods"
import Catetree from "./components/Catetree"
import GoodsDetail from "./components/GoodsDetail"
// const store = createStore(reducer,applyMiddleware(thunk))
// 初始状态
// const initState={
    // Goods:[],//首页列表
    // Catetree:[],//分类列表 
    // GoodsDetail:{}//商品详情
// }


// action creators
// dispatch(changeGoodsAction)
//  const  changeGoodsAction=(arr)=>{
//     return {type:"changeGoods",list:arr}
// }// 首页
// const changeCatetreeAction=(arr)=>{
//     return {type:"changeCatetree",list:arr}
// }
// const changeGoodsDetailAction=(obj)=>{
//     return {type:"changeGoodsDetail",detail:obj}
// }



// 页面一进来，就要发出一个请求，dispatch(requestGoods)
// export const requestGoodsAction=()=>{
//     // 如果在一个action creator中要处理异步操作，需要return一个函数
//    return (dispatch,getState)=>{
//          // 发请求
//          const {Goods} = getState()
//          if(Goods.length>0){
//              return
//          }
//     getIndexGoods().then(res=>{
//         dispatch(changeGoodsAction(res.data.list[0].content))
//     })
//    }
// }// 首页
// export const requestCatetreeAction=()=>{
//     return (dispatch,getState)=>{
//         // 发请求
//         const {Catetree} = getState()
//         if(Catetree.length>0){
//             return
//         }
//         getCatetree().then(res=>{
//             dispatch(changeCatetreeAction(res.data.list))
//         })
//     }
// }//分类
// export const requestGoodsDetailAction=(id)=>{
//     return (dispatch,getState)=>{
//         // 获取详情
//         getgoodsinfo({id:id}).then(res=>{
//             dispatch(changeGoodsDetailAction(res.data.list[0]))
//         })
//     }
// }

// reducer修改state
// const reducer=(state=initState,action)=>{
    // switch(action.type){
        // case "changeGoods":
        //     // {type:"changeGoods",list:数据}
        //     return {
        //         ...state,
        //         Goods:action.list
        //     }
        //     // 修改分类列表
        // case "changeCatetree":
        //     return {
        //         ...state,
        //         Catetree:action.list
        //     }

        // // 修改商品详情
        // case "changeGoodsDetail":
        //     return{
        //         ...state,
        //         GoodsDetail:action.detail
        //     }
        // default:
            // return state
//     }

// }

const reducer = combineReducers({
    user:user,
    Goods:Goods,
    Catetree:Catetree,
    GoodsDetail:GoodsDetail
})


// 创建仓库
const store=createStore(reducer,applyMiddleware(thunk))

// 导出数据
// export const Goods=(state)=>state.Goods
// export const Goods = (state) => state.Goods
// export const Catetree = (state)=>state.Catetree
// export const GoodsDetail=(state)=>state.GoodsDetail

export default store

