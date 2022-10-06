import React, { Component, Fragment } from 'react'

export default class Demo extends Component {
  render() {
    return (
        // 该组件是不会渲染为真实dom的  而且只能有一个key属性
        <Fragment key={1}>
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
        </Fragment>
    )
  }
}
