import React, { Component } from 'react'
import minecontent from "./MineContent.css"
import minAX from "../../../../assets/img/keep.png"
// 图片
import mineTX from "../../../../assets/img/1.jpg"
import mineDFH from "../../../../assets/img/icon_refund.png"

export default class MineContent extends Component {
    render() {
        return (
            <div className="MineContent">
                <div className="MineTX">
                    <img src={mineTX} />
                    <span>小不点儿</span>
                </div>
                <div className="MineWDSC">
                  <img src={minAX} />&nbsp;
                  <span>我的收藏（5）</span>
                </div>
                <div className="MineWDDD">
                    <div className="MineCKDD">
                        <span className="Minedd1">我的订单</span>
                        <span className="Minedd2">查看订单</span>
                    </div>
                </div>
                <div className="MineDFH">
                    <ul>
                        <li>
                            <img src={mineDFH} />
                            <p>待发货</p>
                        </li>
                        <li>
                            <img src={mineDFH} />
                            <p>待发货</p>
                            <span>3</span>
                        </li>
                        <li>
                            <img src={mineDFH} />
                            <span>3</span>
                            <p>待发货</p>
                        </li>
                        <li>
                            <img src={mineDFH} />
                            <span>3</span>
                            <p>待发货</p>
                        </li>
                        <li>
                            <img src={mineDFH} />
                            <span>3</span>
                            <p>待发货</p>
                        </li>
                    </ul>
                </div>
                <div className="MineSHDZ">
                    <p>收货地址管理</p>
                </div>
            </div>
        )
    }
}
