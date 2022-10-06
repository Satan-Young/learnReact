import React, { Component } from 'react'
import Count from './component/Count';
import store from './redux/store'

export default class App extends Component {
    state = {}

  render() {
    console.log(store.getState());
    return (
      <div>
        <Count></Count>
      </div>
    )
  }
}
