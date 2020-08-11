import React from 'react'

import homeHeader from "./HomeHeader.css"

import titleImg from "../../../../assets/img/img/home/logo.jpg"
export default function HomeHeader() {
    return (
        <div>
            <div className="home-header">
                <img src={titleImg}/>
                <input type="tetx" placeholder="寻找商品"/>
            </div>
        </div>
    )
}
