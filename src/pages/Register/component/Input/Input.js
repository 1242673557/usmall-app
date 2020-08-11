import React from 'react'
import aa from "./Input.css"
export default function Input() {
    return (
        <div>
           <div className="Register-box">
               <p className="Register-left input-top">手机号:</p>
            <input type="text" className="srk-boder" ></input>

            <p className="Register-left">昵称:</p>
            <input type="text" className="srk-boder" ></input>

            <p className="Register-left">密码:</p>
            <input type="password" className="srk-boder"></input>
            {/* <p className="input-wjmm">忘记密码</p> */}
            <button className="Register-button">注册</button>
           </div>
        </div>
    )
}
