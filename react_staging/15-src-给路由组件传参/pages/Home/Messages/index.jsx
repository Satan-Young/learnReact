import React, { Component } from 'react'
import { Link,Route } from 'react-router-dom'
import Details from './Details'

export default class Messages extends Component {
  state = {
    messageArray:[
      {
        id:'001',
        title:'消息1'
      },{
        id:'002',
        title:'消息2'
      },{
        id:'003',
        title:'消息3'
      },
    ]
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.messageArray.map((item)=>{
              return(
                <li key={item.id}>
                  {/* 通过params给路由组件传值 */}
                  {/* <Link to={`/home/messages/details/${item.id}/${item.title}`}>{item.title}</Link>&nbsp;&nbsp; */}

                  {/* 通过query(search)给路由组件传递参数 */}
                  {/* <Link to={`/home/messages/details/?id=${item.id}&title=${item.title}`}>{item.title}</Link> */}

                  {/* 通过state给路由组件传递参数 */}
                  <Link to={{pathname:'/home/messages/details',state:{id:item.id,title:item.title}}}>{item.title}</Link>
                </li>
              )
            })
          }
        </ul>
        {/* 声明接收params参数 */}
        {/* <Route path='/home/messages/details/:id/:title' component={Details}></Route> */}

        {/* query参数无需声明接收 正常注册路由就行 */}
        {/* <Route path='/home/messages/details' component={Details}></Route> */}

        {/* state参数无需声明接收 正常注册路由就行 */}
        <Route path='/home/messages/details' component={Details}></Route>
      </div>
    )
  }
}
