import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Item extends Component {

  static propTypes = {
    updateDone:PropTypes.func.isRequired
  }

  state = {
    mouse:false
  }

  // 鼠标移入移出高亮
  handlerMouse = (flag)=>{
    return ()=>{
      this.setState({mouse:flag})
    }
  }

  // 勾选某个数据
  handlerCheck = (id)=>{
    return(event)=>{
      // 将要修改的id值，和当前checked值传给App中的状态
      this.props.updateDone(id,event.target.checked)
    }
  }

  // 删除某个数据
  handlerDelete = (id)=>{
    if (window.confirm('是否删除当前项')) {
      this.props.deleteTodo(id)
    }
  }

  render() {
    const {id,name,done} = this.props
    const {mouse} = this.state
    return (
      <li style={{backgroundColor: mouse ? '#ddd' : '#fff'}} 
          onMouseEnter={this.handlerMouse(true)} 
          onMouseLeave={this.handlerMouse(false)}>
        <label>
            <input type="checkbox" checked={done} onChange={this.handlerCheck(id)}/>
            <span>{name}</span>
        </label>
        <button onClick={()=>{this.handlerDelete(id)}} className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
      </li>
    )
  }
}
