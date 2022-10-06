import React, { Component } from 'react'
import {NavLink,Route } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'

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
                    {/* Link标签无法动态添加高亮效果  使用NavLink 会自动给标签添加一个active类 */}
                    <NavLink activeClassName='aa' className="list-group-item" to="/about">About</NavLink>
                    <NavLink activeClassName='aa' className="list-group-item" to="/home">Home</NavLink> 
                  </div>
                </div>
                <div className="col-xs-6">
                  <div className="panel">
                    <div className="panel-body">
                      {/* 注册路由 */}
                      <Route path="/about" component={About}></Route>
                      <Route path="/home" component={Home}></Route>
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
