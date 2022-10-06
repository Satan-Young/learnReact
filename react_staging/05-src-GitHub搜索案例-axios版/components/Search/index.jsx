import axios from 'axios';
import React, { Component } from 'react'

export default class Search extends Component {
  search = ()=>{
    this.props.updateState({isFirst:false,isLoading:true})
    // console.log(this.keyWordElement.value);
    // 解构赋值(连续解构赋值+重命名)
    const {keyWordElement:{value:keyWord}} = this
    // 请求地址可以简化为/api/search/users?q=${keyWord}
    axios.get(`http://localhost:3000/api/search/users?q=${keyWord}`)
    .then(res=>{
      this.props.updateState({isLoading:false,user:res.data.items})
      this.keyWordElement.value = ''
    })
    .catch(err=>{
      this.props.updateState({isLoading:false,err:err.message})
    })
    
  }
  render() {
    return (
      <div>
        <section className="jumbotron">
            <h3 className="jumbotron-heading">搜索Github用户</h3>
            <div>
                <input ref={(c)=>{this.keyWordElement = c}} type="text" placeholder="输入你要搜索的名字"/>&nbsp;
                <button onClick={this.search}>点击搜索</button>
            </div>
        </section>
      </div>
    )
  }
}
