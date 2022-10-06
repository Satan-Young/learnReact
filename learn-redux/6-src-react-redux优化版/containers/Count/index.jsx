// 引入connect函数连接redux和容器组件
import { connect } from 'react-redux'

import {
    createIncrementAction,
    createDecrementAction,
    createIncrementActionAsync
} from '../../redux/action'

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
    console.log(this.props);
    return (
      <div>
        <h3>当前的求和为：{this.props.count}</h3>
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


// const mapStateToProps = (state)=>{
//     return {count:state}
// }

/*
    mapDispatchToProps函数返回的是一个对象
    mapDispatchToProps用于传递操作对象的方法
*/
// const mapDispatchToProps = (dispatch)=>{
//     return{
//         increment:(number)=>{dispatch(createIncrementAction(number))},
//         decrement:(number)=>{dispatch(createDecrementAction(number))},
//         incrementAsync:(number,time)=>{dispatch(createIncrementActionAsync(number,time))}
//     }
// }

// connect调用后返回一个函数再次调用传入的参数是UI组件
// connect调用时可以传入两个参数，都为函数，分别用来传递redux中的状态和传递用于操作状态的方法
export default connect(
    // 映射状态
    (state)=>{
        return {count:state}
    },
    // 映射操作状态的方法
    {
        increment:createIncrementAction,
        decrement:createDecrementAction,
        incrementAsync:createIncrementActionAsync
    })(Count)
