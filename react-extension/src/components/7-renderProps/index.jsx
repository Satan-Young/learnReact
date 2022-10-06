import React, { Component } from 'react'
import '../5-context/index.css'
export default class Demo extends Component {
  render() {
    return (
      <div className='parent'>
        <h2>我是祖先组件</h2>
        {/* 写在组件标签中的内容 存放在该组件的props.children中 */}
        {/* <A>Hello</A> */}
        {/* 给A组件传入一个函数 返回值为B组件 */}
        <A render={(name)=>{return <B name={name}></B>}}></A>
      </div>
    )
  }
}

class A extends Component {
    state = {
        name:'Tom'
    }
  render() {
    return (
      <div className='father'>
        <h2>我是A组件</h2>
        {/* {this.props.children} */}
        {/* 通过this.props.函数名()调用函数 实现插槽功能 */}
        {this.props.render(this.state.name)}
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div className='son'>
        <h2>我是B组件,A组件传入的名字为{this.props.name}</h2>
      </div>
    )
  }
}