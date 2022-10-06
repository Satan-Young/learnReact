import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {

  static propTypes = {
    todos:PropTypes.array.isRequired,
    updateDone:PropTypes.func.isRequired,
    deleteTodo:PropTypes.func.isRequired
  }

  render() {
    return (
        <ul className="todo-main">
            {
                this.props.todos.map((item)=>{
                    return <Item key={item.id} {...item} updateDone={this.props.updateDone} deleteTodo={this.props.deleteTodo}/>
                })
            }
        </ul>
    )
  }
}
