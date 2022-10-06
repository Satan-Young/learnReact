import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'
import './App.css'

export default class App extends Component {
  state = {
    todos:[
      {id:'001',name:'吃饭',done:true},
      {id:'002',name:'睡觉',done:true},
      {id:'003',name:'写代码',done:false},
      {id:'004',name:'打游戏',done:false},
    ]
  }
  // 设置一个回调函数来获取子组件的数据
  addTodo = (todoObj)=>{
    // 从state中解构得到之前的内容
    const {todos} = this.state
    // 将从子组件中新获得的内容和之前内容合并
    const newTodo = [todoObj,...todos]
    // 用新数据更新状态
    this.setState({todos:newTodo})
  }

  // 更改某个数据的done值
  updateDone = (id,done)=>{
    // 匹配id
    const {todos} = this.state
    const newTodo = todos.map((item)=>{
      if (item.id===id) {
        // 如果id一样就只修改done的值
        return{...item,done}
      } else {
        return item
      }
    })
    this.setState({todos:newTodo})
  }

  // 删除某个数据
  deleteTodo = (id)=>{
    // 获取原数据
    const {todos} = this.state
    // 过滤数据
    const newTodo =  todos.filter((item)=>{
      return item.id !== id
    })
    // 更新数据
    this.setState({todos:newTodo})
  }

  // 全选
  checkAllTodo = (done)=>{
    // 获取原数据
    const {todos} = this.state
    // 修改原数据
    const newTodo = todos.map((item)=>{
      return {...item,done}
    })
    // 更新数据
    this.setState({todos:newTodo})
  }

  // 删除全部勾选
  deleteAllTodo = ()=>{
    // 获取原数据
    const {todos} = this.state
    // 过滤数据
    const newTodo = todos.filter((item)=>{
      return !item.done
    })
    // 更新数据
    this.setState({todos:newTodo})
  }

  render() {
    return (
      <div>
         <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo}/>
            <List todos={this.state.todos} updateDone={this.updateDone} deleteTodo={this.deleteTodo}/>
            <Footer todos={this.state.todos} checkAllTodo={this.checkAllTodo} deleteAllTodo={this.deleteAllTodo}/>
          </div>
        </div>
      </div>
    )
  }
}
