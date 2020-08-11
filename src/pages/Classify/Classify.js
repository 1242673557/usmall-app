import React, { Component } from 'react'
import ify from "./Classify.css"
import {connect} from "react-redux"
import {Catetree,requestCatetreeAction} from "../../store"
 class Classify extends Component {
     constructor(){
         super()
         this.state={
             n:0
         }
     }
     componentDidMount(){
         this.props.requestCatetree()
     }
     changeN(index){
         this.setState({
             n:index
         })
     }
    render() {
        const {Catetree} = this.props
        const {n} =this.state
        console.log(Catetree)
        return (
            <div>
                <div className="classifyTitle">
                    分类
                </div>
                <div className="classifyLeft">
              {
                  Catetree.map((item,index)=>{
                  return <span onClick={()=>this.changeN(index)} className={n===index?'classifySelect':''}  key={item.id}>{item.catename}</span>    
                  })
              }
              </div>
              {
                Catetree.length>0?Catetree[n].children.map(item=>{
                  return <div className="classifyRight" key={item.id}>
                      <img src={item.img} />
                      <p>{item.catename}</p>
                      </div>
                  }):null
              }
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        Catetree:Catetree(state)
    }
}
const mapDispatchToprops=dispatch=>{
    return{
        requestCatetree:()=>dispatch(requestCatetreeAction())
    }
}
export default connect(mapStateToProps,mapDispatchToprops)(Classify)