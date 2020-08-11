import React, { Component } from 'react'
import { connect } from "react-redux"
import { Goods, requestGoodsAction } from "../../../../store"
import Homelist from "./HomeList.css"
import {withRouter} from "react-router-dom"
class HomeList extends Component {
    componentDidMount() {
        this.props.requestGoods()
    }
    Detail(id){
        this.props.history.push("/index/detail?id="+id)
        // console.log(this.props.Goods[1].id)
    }
    render() {
        const { Goods } = this.props
        console.log(Goods)
        return (
            <div>
                {
                    Goods.map(item => {
                        return <div className="Homelst" key={item.id}>
                            <div className="HomeLeft">
                                <img src={item.img} />
                            </div>
                            <div className="HomeRight">
                                <p>{item.goodsname}</p>
                                <span>{'￥' + item.price}</span>
                                <button onClick={()=>this.Detail(item.id)}>立即抢购</button>
                            </div>
                        </div>
                    })
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        Goods: Goods(state)
    }
}
const mapDispatchToprops = dispatch => {
    return {
        requestGoods: () => dispatch(requestGoodsAction())
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(withRouter(HomeList) )
