import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h3>我是Home的内容</h3>
      <div>
        <ul className="nav nav-tabs">
          <li>
            {/* 子路由链接的to有三种写法 /news  ./news  news
                 /news：表示根路径，不会在/home后加上/news  会跳转失败
                 ./news: 可以在/home后加/news
                 news:可以在/home后加/news
            */}
            <NavLink className="list-group-item" to="news">News</NavLink>
          </li>
          <li>
            <NavLink className="list-group-item" to="message">Message</NavLink>
          </li>
        </ul>
      </div>
      {/* 注册子路由的 */}
      <Outlet></Outlet>
    </div>
  )
}
