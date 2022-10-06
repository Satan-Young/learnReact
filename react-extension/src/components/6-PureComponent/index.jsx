import React, { Component, PureComponent } from 'react'
import '../5-context/index.css'

export default class Demo extends PureComponent {
    state = {
        carName:'c63'
    }
    change = ()=>{
        this.setState({carName:'S600'})
    }
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log(this.props,this.state);
    //     console.log(nextProps,nextState);
    //     if (this.state===nextState) {
    //         return false
    //     }
    //     return true
    // }
  render() {
    console.log('render祖先组件');
    return (
      <div className='parent'>
        <h2>我是祖先组件</h2>
        <button onClick={this.change}>点击换车</button>
        <h2>现在车为：{this.state.carName}</h2>
        <B/>
      </div>
    )
  }
}
class B extends Component {
  render() {
    return (
      <div className='father'>
        <h2>我是父亲组件</h2>
        <C/>
      </div>
    )
  }
}
class C extends PureComponent {
  render() {
    console.log('render子组件');
    return (
      <div className='son'>
        <h2>我是子组件</h2>
      </div>
    )
  }
}
