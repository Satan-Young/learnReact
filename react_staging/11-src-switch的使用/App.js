import React, { Component } from 'react'
import {Route ,Switch } from 'react-router-dom'
import MyNavLink from './components/MyNavLink'
import About from './pages/About'
import Home from './pages/Home'
import Test from './pages/Test'

export default class App extends Component {
  render() {
    return (
        <div>
          <div id="root">
            <div>
              <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                  <div className="page-header"><h2>React Router Demo</h2></div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                  <div className="list-group">
                    {/* 原生html的跳转，通过a标签跳转 */}
                    {/* <a class="list-group-item active" href="./about.html">About</a>
                    <a class="list-group-item" href="./home.html">Home</a> */}

                    {/* react中通过路由链接跳转----编写路由链接 */}
                    {/* 标签中的内容会作为children属性通过props传递给子组件 */}
                    <MyNavLink to="/about" a={1} b={2}>About</MyNavLink>
                    <MyNavLink to="/home">Home</MyNavLink>
                  </div>
                </div>
                <div className="col-xs-6">
                  <div className="panel">
                    <div className="panel-body">
                      {/* 注册路由 */}
                      {/* 使用switch标签 当匹配到一个路由组件时就不会再往下匹配了 */}
                      <Switch>
                        <Route path="/about" component={About}></Route>
                        <Route path="/home" component={Home}></Route>
                        <Route path="/home" component={Test}></Route>
                      </Switch>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
