import React, { Component } from 'react'
import aa from "./Input.css"
import { login } from '../../../../util/request'
import { successAlert } from '../../../../util/alert'
import { connect } from "react-redux"
import { changeUserAction,  } from '../../../../store/components/user'
import {withRouter} from "react-router-dom"
class Input extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                phone: "",
                password: ""
            }
        }
    }
    // 修改user
    changeUser(e, key) {
        this.setState({
            user: {
                ...this.state.user,
                [key]: e.target.value
            }
        })
    }
    login(){
        
        login(this.state.user).then(res=>{
            if(res.data.code===200){
                successAlert("登录成功")
                //要把res.data.list 存进redux/user/user 
                this.props.changeUser(res.data.list)
                sessionStorage.setItem("user",JSON.stringify(res.data.list))
                this.props.history.push("/index")
            }else{
                successAlert(res.data.msg)
            }
        })
    }
    render() {
        const { user } = this.state
        return (
            <div>
                <div>
                    <div className="input-box">
                        <p className="input-left input-top">账号:</p>
                        <input type="text" className="srk-boder" value={user.phone} onChange={(e) => this.changeUser(e, "phone")}></input>

                        <p className="input-left">密码:</p>
                        <input type="password" className="srk-boder" value={user.password} onChange={(e) => this.changeUser(e, "password")}></input>
                        <p className="input-wjmm">忘记密码</p>
                        <button className="input-button" onClick={() => this.login()} >登录</button>
                    </div>
                </div>
            </div>
        )
    }
}
const mapState = (state) => {
    console.log(state)
    return {
        
    }
}
const mapDispatch = (dispatch) => {
    return {
        changeUser:(user)=>dispatch(changeUserAction(user))
    }
}
export default withRouter( connect(mapState,mapDispatch)(Input))

