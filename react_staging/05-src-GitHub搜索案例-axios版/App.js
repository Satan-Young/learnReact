import React, { Component } from 'react'
import List from './components/List'
import Search from './components/Search'

export default class App extends Component {
  state = {//初始化状态
    user:[],//用户初始化为一个空数组
    isFirst:true,//是否第一次展示页面为true
    isLoading:false,//是否在加载为false
    err:''//请求错误信息为空
  }

  updateState = (stateObj)=>{
    this.setState(stateObj)
  }

  render() {
    return (
        <div className="container">
          <Search updateState={this.updateState}></Search>
          <List {...this.state}></List>
        </div>
    )
  }
}
