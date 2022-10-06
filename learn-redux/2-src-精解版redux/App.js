import React, { Component } from 'react'
import store from './redux/store'

export default class App extends Component {
    state = {}

    // componentDidMount(){
    //   // 检测store中的状态是否有变化，有变化就调用render重新渲染
    //   store.subscribe(()=>{
    //     this.setState({})
    //   })
    // }

  increment = ()=>{
    const {value} = this.selectNumber
    store.dispatch({type:'increment',date:value*1})
  }
  decrement = ()=>{
    const {value} = this.selectNumber
    store.dispatch({type:'decrement',date:value*1})
    
  }
  incrementIfOdd = ()=>{
    const {value} = this.selectNumber
    const count = store.getState()
    if (count % 2 !==0 ) {
      store.dispatch({type:'increment',date:value*1})
    }
    
  }
  incrementAsync = ()=>{
    const {value} = this.selectNumber
    setTimeout(() => {
      store.dispatch({type:'increment',date:value*1})
    }, 2000);
  }
  render() {
    return (
      <div>
        <h3>当前的求和为：{store.getState()}</h3>
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
