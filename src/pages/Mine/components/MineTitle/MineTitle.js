import React, { Component } from 'react'
import Minetitle from "./MineTitle.css"
import mineSZ from "../../../../assets/img/set.png"
import mineXX from "../../../../assets/img/news.png"

export default class MineTitle extends Component {
    render() {
        return (
            <div className="minetitle">
               <div className="mineDiv">
                  <img src={mineSZ} className="mineImg1" />
                  个人中心
                  <img src={mineXX} className="mineImg2" />
                  <p>9+</p>
               </div>
            </div>
        )
    }
}
