import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    const{user,isFirst,isLoading,err} = this.props
    return (
        <div className="row">
          {
            // 在react中无法使用if条件判断，但是可以通过三目运算的嵌套进行判断
            isFirst ? <h2>输入用户名，点击搜索</h2> :
            isLoading ? <h2>Loading...</h2> :
            err !== '' ? <h2 style={{color:"red"}}>{err}</h2> :
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
