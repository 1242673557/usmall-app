import React, { Component } from 'react'

import { Switch, Route, Redirect, NavLink } from "react-router-dom"
import active from "./componnet/active.css"


// 下面图标引入
import homeImg from "../../assets/img/tab_home_nor.png"//首页未选中
import homeImg2 from "../../assets/img/tab_home_hig.png"//首页选中
import classifyImg from "../../assets/img/tab_menu_nor.png"//分类未选中
import classifyImg2 from "../../assets/img/tab_menu_hig.png"//分类选中
import shoppingImg from "../../assets/img/tab_shopping_nor.png"//购物车未选中
import shoppingImg2 from "../../assets/img/tab_shopping_hig.png"//购物车选中
import mineImg from "../../assets/img/tab_me_nor.png"//我的未选中
import mineImg2 from "../../assets/img/tab_me_hig.png"//我的选中


// 二级路由组件引入
import Home from "../Home/Home"
import Classify from "../Classify/Classify"
import Shopping from "../Shopping/Shopping"
import Mine from "../Mine/Mine"
import Detail from "../Detail/Detail"
export default class Index extends Component {
    render() {
        return (
            <div>
                <Switch>
                    {/* 二级路由出口 */}
                    <Route path="/index/home" component={Home}></Route>
                    <Route path="/index/classify" component={Classify}></Route>
                    <Route path="/index/shopping" component={Shopping}></Route>
                    <Route path="/index/mine" component={Mine}></Route>
                    <Route path="/index/Detail" component={Detail}></Route>
                    <Redirect to="/index/home"></Redirect>
                </Switch>






                {/* 菜单选项 */}
                <div className="index-flex">
                    <NavLink to="/index/home"  activeClassName="index-active">
                        <img src={homeImg} id="index-img" />
                        <img src={homeImg2} id="index-img2" />
                        <span id="index-span">首页</span>
                    </NavLink>
                    <NavLink to="/index/classify" activeClassName="index-active">
                        <img src={classifyImg}  id="index-img" />
                        <img src={classifyImg2}  id="index-img2" />

                        <span id="index-span" >分类</span>
                    </NavLink>
                    <NavLink to="/index/shopping" activeClassName="index-active">
                        <img src={shoppingImg} id="index-img" />
                        <img src={shoppingImg2} id="index-img2" />

                        <span id="index-span" >购物车</span>
                    </NavLink>
                    <NavLink to="/index/mine" activeClassName="index-active">
                        <img src={mineImg}  id="index-img" />
                        <img src={mineImg2}  id="index-img2" />
                        <span  id="index-span" >我的</span>
                    </NavLink>
                </div>


            </div>
        )
    }
}
