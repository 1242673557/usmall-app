import React from 'react'
import "./HomeBanner.css"
import {Carousel} from "antd-mobile"
import Homexsqg from "../../../../assets/img/img/home/1.jpg"
export default function HomeBanner(props) {
    const {banner}=props
    return (
        <div className="banner">
            <Carousel>
                {
                    banner.map(item=>{
                        return <img key={item.id} src={item.img} alt=""/>
                    })
                }
            </Carousel>
            <div>
               <ul>
                   <li>
                       <img src={Homexsqg} />
                       <p>限时抢购</p>
                   </li>
                   <li>
                       <img src={Homexsqg} />
                       <p>积分商城</p>
                   </li>
                   <li>
                       <img src={Homexsqg} />
                       <p>联系我们</p>
                   </li>
                   <li>
                       <img src={Homexsqg} />
                       <p>商品分类</p>
                   </li>
               </ul>
            </div>
        </div>
    )
}
