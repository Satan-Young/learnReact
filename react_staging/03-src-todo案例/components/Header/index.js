import { nanoid } from 'nanoid'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Header extends Component {
  
  static propTypes={
    addTodo:PropTypes.func.isRequired
  }

  // 新增数据
  handlerAdd = (event)=>{
    // 如果没有按回车 结束逻辑(只有按了回车就执行下面的)
    if (event.keyCode !== 13) return
    // 将输入的内容清除空格 如果为空就结束逻辑
    if(event.target.value.trim()===''){
        alert('输入不能为空')
        return
    }
    // 将新输入的事情设置为对象
    const newTodo = {id:nanoid(),name:event.target.value,done:false}
    // 调用App函数并传入内容
    this.props.addTodo(newTodo)
    // 将输入款置空
    event.target.value = ''
  }
  
  render() {
    return (
        <div className="todo-header">
            <input onKeyUp={this.handlerAdd} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
        </div>
    )
  }
}
