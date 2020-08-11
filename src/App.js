import React, { Component } from 'react'
// 路由引入
import {Switch,Router,Redirect, Route} from "react-router-dom"

// 配置路由文件
import Login from "./pages/Login/Login"
import Index from "./pages/Index/Index"
import Register from "./pages/Register/Register"

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/index" component={Index}></Route>
          <Route path="/register" component={Register}></Route>

          <Redirect to="/login"></Redirect>
        </Switch>
      </div>
    )
  }
}
