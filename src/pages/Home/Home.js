import React, { Component } from 'react'

// 头部搜索
import HomeHeader from "./components/HomeHeader/HomeHeader"
// 轮播图
import HomeBanner from "./components/HomeBanner/HomeBanner"
// 数据列表
import HomeList from "./components/HomeList/HomeList"
// 数据请求
import { getBanner } from "../../util/request"
export default class Home extends Component {
    constructor(){
        super()
        this.state={
            // 轮播图
            banner:[],
            // 列表
            list:[]
        }
    }
   componentDidMount(){
    //    轮播图
       getBanner().then(res=>{
           var arr=res.data.list
           arr.forEach(item=>{
               item.img=this.$img+item.img
           })
           this.setState({
               banner:arr
           })
       }) 

   }
    render() {
        const {banner,list}=this.state
        return (
            <div>
               <HomeHeader></HomeHeader>
               <HomeBanner banner={banner}></HomeBanner >
                <HomeList list={list}></HomeList>
            </div>
        )
    }
}
