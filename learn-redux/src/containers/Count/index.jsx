// 引入connect函数连接redux和容器组件
import { connect } from 'react-redux'

import {
    createIncrementAction,
    createDecrementAction,
    createIncrementActionAsync
} from '../../redux/action/count'

// 整合UI组件和容器组件
import React, { Component } from 'react'

class Count extends Component {
      
      increment = ()=>{
        const {value} = this.selectNumber
        this.props.increment(value*1)
      }
      decrement = ()=>{
        const {value} = this.selectNumber
        this.props.decrement(value*1)
      }
      incrementIfOdd = ()=>{
        const {value} = this.selectNumber
        if (this.props.count % 2 !==0) {
          this.props.increment(value*1)
        }
      }
      incrementAsync = ()=>{
        const {value} = this.selectNumber
        this.props.incrementAsync(value*1,500)
      }
  render() {
    return (
      <div>
        <h2>Count组件，下面组件的总人数为：{this.props.renShu}</h2>
        <h4>当前的求和为：{this.props.count}</h4>
        <select ref={c=>{this.selectNumber = c}}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>奇数+</button>
        <button onClick={this.incrementAsync}>异步+</button>
      </div>
    )
  }
}

export default connect(
    // 映射状态
    (state)=>{
        return {
          count:state.shuZi,
          renShu:state.ren.length
        }
    },
    // 映射操作状态的方法
    {
        increment:createIncrementAction,
        decrement:createDecrementAction,
        incrementAsync:createIncrementActionAsync
    })(Count)
