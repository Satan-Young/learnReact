import React, { Component } from 'react'

export default class Demo extends Component {
    state = {
        count:0
    }

    add = ()=>{
        // 对象式的setState
        this.setState({count:this.state.count+1},()=>{
            console.log('当前状态中count值：'+this.state.count);
        })
        // setState方法式异步的
        // console.log('当前状态中count值：'+this.state.count);  

        // 函数式的setState
        // this.setState((state)=>{
        //     return {count:state.count+1}
        // })
    }
  render() {
    return (
      <div>
        <button onClick={this.add}>点击{this.state.count}次</button>
      </div>
    )
  }
}
