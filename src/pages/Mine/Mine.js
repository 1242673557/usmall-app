import React, { Component } from 'react'
import MineTitle from "./components/MineTitle/MineTitle"
import MineContent from "./components/MineContent/MineContent"
export default class Mine extends Component {
    render() {
        return (
            <div>
                <MineTitle></MineTitle>
                <MineContent></MineContent>
            </div>
        )
    }
}
