import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

  // 勾选全部
  checkAll = (event)=>{
    this.props.checkAllTodo(event.target.checked)
  }
  // 删除勾选
  deleteAll = ()=>{
    if (window.confirm('是否全部删除')) {
      this.props.deleteAllTodo()
    }
  }

  render() {
    // 获取已完成的个数
    const doneCount = this.props.todos.reduce((pre,item)=>{return pre + (item.done ? 1 : 0)},0)
    // 获取总数
    const total = this.props.todos.length
    return (
        <div className="todo-footer">
            <label>
                <input type="checkbox" onChange={this.checkAll} checked={doneCount === total && total !== 0}/>
            </label>
            <span>
                <span>已完成{doneCount}</span> / 全部{total}
            </span>
            <button onClick={this.deleteAll} className="btn btn-danger">清除已完成任务</button>
        </div>
    )
  }
}
