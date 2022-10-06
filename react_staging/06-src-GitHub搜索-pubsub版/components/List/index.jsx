import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {

  state = {//初始化状态
    user:[],//用户初始化为一个空数组
    isFirst:true,//是否第一次展示页面为true
    isLoading:false,//是否在加载为false
    err:''//请求错误信息为空
  }

  componentDidMount(){
    // 消息订阅 (名称，要订阅的消息) 要订阅的消息是个函数
    this.token = PubSub.subscribe('update',(_,data)=>{
      this.setState(data)
    })
  }
  componentWillUnmount(){
    PubSub.unsubscribe(this.token);
  }

  render() {
    const{user,isFirst,isLoading,err} = this.state
    return (
        <div className="row">
          {
            // 在react中无法使用if条件判断，但是可以通过三目运算的嵌套进行判断
            isFirst ? <h2>输入用户名，点击搜索</h2> :
            isLoading ? <h2>Loading...</h2> :
            err!=='' ? <h2 style={{color:"red"}}>{err}</h2> :
            (user.map((item)=>{
              return(
                <div key={item.id} className="card">
                  <a rel="noreferrer" href={item.html_url} target="_blank">
                    <img alt='head_sculpture' src={item.avatar_url} style={{width: "100px"}}/>
                  </a>
                  <p className="card-text">{item.login}</p>
                </div>
              )
            })
            )
          }
        </div>
    )
  }
}
