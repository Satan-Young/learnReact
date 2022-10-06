import React, { Component } from 'react'
import { Route ,Switch} from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import News from './News'
import Messages from './Messages'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>Home内容</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to='/home/news'>News</MyNavLink>
            </li>
            <li>
              <MyNavLink to='/home/messages'>Message</MyNavLink>
            </li>
          </ul>
          {/* 注册路由 */}
          <Switch>
            {/* 在注册子路由时要加上父路由的path值 */}
            <Route path='/home/news' component={News}></Route>
            <Route path='/home/messages' component={Messages}></Route>
          </Switch>
        </div>
      </div>
    )
  }
}
