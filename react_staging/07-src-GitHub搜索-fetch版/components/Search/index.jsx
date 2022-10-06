// import axios from 'axios';
import PubSub from 'pubsub-js'
import React, { Component } from 'react'

export default class Search extends Component {
  search = async()=>{
    // this.props.updateState({isFirst:false,isLoading:true})
    // 消息发布，(名称，消息)，名称和订阅的名称要一致
    PubSub.publish('update',{isFirst:false,isLoading:true})
    // console.log(this.keyWordElement.value);
    // 解构赋值(连续解构赋值+重命名)
    const {keyWordElement:{value:keyWord}} = this
    // 请求地址可以简化为/api/search/users?q=${keyWord}
     /*axios.get(`http://localhost:3000/api/search/users?q=${keyWord}`)
    .then(res=>{
      // this.props.updateState({isLoading:false,user:res.data.items})
      PubSub.publish('update',{isLoading:false,user:res.data.items})
      this.keyWordElement.value = ''
    })
    .catch(err=>{
      // this.props.updateState({isLoading:false,err:err.message})
      PubSub.publish('update',{isLoading:false,err:err.message})
    })
    */
    // 使用fetch发送网络请求(未优化)
    /*
    fetch(`http://localhost:3000/api/search/users?q=${keyWord}`).then(
      response =>{
        console.log('服务器启动成功');
        // console.log(response);
        return response.json()
      },
      error =>{
        console.log('服务器启动失败',error);
      }
    ).then(
      response =>{
        console.log('获取数据成功',response);
      },
      error =>{
        console.log('获取数据失败',error);
      }
    )
    */
   // 使用fetch发送网络请求(优化)
    try {
      // await等待请求成功的，请求错误需要用try  catch
      const res = await fetch(`http://localhost:3000/api/search/users?q=${keyWord}`)
      const date = await res.json()
      PubSub.publish('update',{isLoading:false,user:date.items})
      // console.log(date);
    } catch (error) {
      console.log('请求失败',error);
    }
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
