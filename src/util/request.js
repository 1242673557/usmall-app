import axios from "axios"
import qs from "qs"
// axios.interceptors.request.use(config=>{
//     // 请求拦截
//     return config
// })
axios.interceptors.response.use(res=>{
    // 响应拦截
    console.log(res)
    return res;
})

// 会员登录
export const login=(data)=>{
    return axios({
        url:"/api/login",
        method:"post",
        data:qs.stringify(data)
    })
}


// 首页轮播图
export const getBanner=()=>{
    return axios({
        url:"/api/getbanner",
        method:"get"
    })
}
// 首页列表
export const getIndexGoods=()=>{
    return axios({
        url:"/api/getindexgoods",
        method:"get"
    })
}
// 获取商品分类
export const getCatetree=(params)=>{
    return axios({
        url:"/api/getcatetree",
        method:"get"
    })
}
// 获取一个商品信息
export const getgoodsinfo=(params)=>{
    return axios({
        url:"/api/getgoodsinfo",
        method:"get",
        params
    })
}