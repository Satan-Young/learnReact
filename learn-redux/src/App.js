import React, { Component } from 'react'
import Count from './containers/Count';
import Person from './containers/Person';

export default class App extends Component {
    state = {}

  render() {
    return (
      <div>
        {/* 不需要给每个容器组件传store 见index.js */}
        <Count></Count>
        <hr/>
        <Person></Person>
      </div>
    )
  }
}
