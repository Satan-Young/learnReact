import React, { Component } from 'react'

export default class App extends Component {
    state = {
        count:0
    }
  increment = ()=>{
    const {value} = this.selectNumber
    const {count} = this.state
    this.setState({count:value*1+count})
  }
  decrement = ()=>{
    const {value} = this.selectNumber
    const {count} = this.state
    this.setState({count:count-value*1})
  }
  incrementIfOdd = ()=>{
    const {value} = this.selectNumber
    const {count} = this.state
    if (count % 2 !==0 ) {
        this.setState({count:count+value*1})
    }
    
  }
  incrementAsync = ()=>{
    setTimeout(() => {
        const {value} = this.selectNumber
        const {count} = this.state
        this.setState({count:value*1+count})
    }, 2000);
  }
  render() {
    return (
      <div>
        <h3>当前的求和为：{this.state.count}</h3>
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
