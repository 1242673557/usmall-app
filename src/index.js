import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 路由引入
import {HashRouter,BrowserRouter} from "react-router-dom"

// 引入rem
import "./assets/rem"
// 引入rem重置样式表
import "./assets/reset.css"
// 引入移动框架ui
import 'antd-mobile/dist/antd-mobile.css'
// 引入redux
import {Provider} from "react-redux"
import store from "./store"
Component.prototype.$img="http://localhost:3000"
ReactDOM.render(
  <Provider store={store}>
  <HashRouter>
    <App />
  </HashRouter>
  </Provider>,
  document.getElementById('root')
);
