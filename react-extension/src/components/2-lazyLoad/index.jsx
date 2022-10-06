import React, { Component, lazy ,Suspense} from 'react'
import {NavLink,Route,} from 'react-router-dom'
import Loading from './Loading'

// 路由懒加载
const Home = lazy(()=>{return import('./Home')})
const About = lazy(()=>{return import('./About')})

export default class Demo extends Component {
  render() {
    return (
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
                    <NavLink className="list-group-item" to='/about'>About</NavLink>
                    <NavLink className="list-group-item" to='/home'>Home</NavLink>
                  </div>
                </div>
                <div className="col-xs-6">
                  <div className="panel">
                    <div className="panel-body">
                        {/* 使用路由懒加载注意点
                            1.必须使用Suspense组件将注册的路由包起来
                            2.需要带上fallback  可以是组件(这时组件导入不可以通过懒加载导入)也可以是简单的html
                        */}
                      <Suspense fallback={<Loading></Loading>}>
                        <Route path="/about" component={About}></Route>
                        <Route path="/home" component={Home}></Route>
                      </Suspense>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
  }
}
