import React, { Component } from 'react'
import Count from './containers/Count';

export default class App extends Component {
    state = {}

  render() {
    return (
      <div>
        {/* 不需要给每个容器组件传store 见index.js */}
        <Count></Count>
      </div>
    )
  }
}
