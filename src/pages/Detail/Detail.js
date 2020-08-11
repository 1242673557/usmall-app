import React, { Component } from 'react'
import querystring from "querystring"
import { connect } from "react-redux"
import { GoodsDetail, requestGoodsDetailAction } from '../../store'
import DetailTitle from "./components/DetailTitile/DetailTitile"

import Detailcss from "./Detail.css"
// 图片
import GWCTB from "../../assets/img/img/cart_on.png"

class Detail extends Component {
    constructor(){
        super()
        this.state={
            n:0
        }
    }


    componentDidMount() {
        const id = querystring.parse(this.props.location.search.slice(1)).id
        this.props.requestGoodsDetail(id)
    }
    changeN(index){
        this.setState({
            n:index
        })
    }
    render() {
        const { GoodsDetail } = this.props
        // var arr = eval("(" + GoodsDetail.specsattr + ")")
        console.log(eval("(" + GoodsDetail.specsattr + ")"))
        const {n} =this.state
        return (
            <div>
                <DetailTitle></DetailTitle>
                <div className="DetailBanner">
                    <img src={GoodsDetail.img} />
                    <div className="DetailContent">
                        <span className="DetailSPAN1">{GoodsDetail.goodsname}</span>
                        <span className="DetailSPAN2">
                            <img src={GWCTB} />
                            <p>收藏</p>
                        </span>
                        <div className="DetailPrice">
                            <span className="DetailJg">￥{GoodsDetail.price}</span>
                            {
                                GoodsDetail.ishot === 1 ? <span className="DetailSpec">热卖</span> : null
                            }
                            {
                                GoodsDetail.isnew === 1 ? <span className="DetailSpec">新品</span> : null
                            }
                        </div>
                        <div className="DetailYj">
                            ￥{GoodsDetail.market_price}
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: GoodsDetail.description }} />
                        {/* 点击收藏 */}
                        <div className="DetaiDjsc">
                            <div className="DetaiDBj">
                                <div className="DetaiXtp">
                                    <img src={GoodsDetail.img} />
                                    <span>{GoodsDetail.goodsname}</span>
                                </div>
                                <div className="DetailGUIGE">{GoodsDetail.specsname}</div>

                                <div>
                                    {
                                    GoodsDetail.specsattr ? eval("(" + GoodsDetail.specsattr + ")").map((item,index) => {
                                        return <span onClick={()=>this.changeN(index)}  className={n===index?'DetailXUANZE2':'DetailXUANZE'} key={item}>{item}</span>
                                    }) : null
                                    }
                                   <div className="DetailGWC">
                                   <button className="DetailJRGWC">加入购物车</button>
                                   <span className="DetailQX">取消</span>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
const mapStateToprops = (state) => {
    return {
        GoodsDetail: GoodsDetail(state)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        requestGoodsDetail: (id) => dispatch(requestGoodsDetailAction(id))
    }
}
export default connect(mapStateToprops, mapDispatchToProps)(Detail)