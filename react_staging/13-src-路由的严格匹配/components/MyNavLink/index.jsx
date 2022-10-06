import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {/* 通过...this.props获取props中所有属性 */}
        <NavLink activeClassName='aa' className="list-group-item" {...this.props} ></NavLink>
      </div>
    )
  }
}
