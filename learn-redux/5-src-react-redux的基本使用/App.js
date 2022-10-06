import React, { Component } from 'react'
import Count from './containers/Count';
import store from './redux/store'

export default class App extends Component {
    state = {}

  render() {
    console.log(store.getState());
    return (
      <div>
        <Count store={store}></Count>
      </div>
    )
  }
}
