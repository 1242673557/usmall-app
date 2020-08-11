const initState={
    user:null
}
// 修改user的action
export const changeUserAction=user=>{
    return{
        type:"changeUser",
        user
    }
}


const reducer=(state=initState,action)=>{
switch(action.type){
    case "changeUser":
        return{
            ...state,
            user:action.user
        }
        default:
            return state
}
}
export default reducer

//导出数据
export const getUser = state => state.user.user;