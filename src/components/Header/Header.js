import React, { Component } from 'react'
import "./Header.css"
import {withRouter} from "react-router-dom"
 class Header extends Component {
    goBack(){
        this.props.history.go(-1)
    }
    render() {
        const {title,back}=this.props
        return (
            <div className="header">
               {back?<span onClick={this.goBack.bind(this)} className="header-back">返回</span>:null}
             
        <div className="header-title">{title}</div>
            </div>
        )
    }
}
export default withRouter(Header) 