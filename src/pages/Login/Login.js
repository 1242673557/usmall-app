import React, { Component } from 'react'


// 引入页面样式组件
import Heder from './components/Header/Heder'
import Input from "./components/Input/Input"
export default class Login extends Component {
    render() {
        return (
            <div>
               <Heder></Heder>
               <Input></Input>
            </div>
        )
    }
}
