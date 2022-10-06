import React from 'react'
import { NavLink, useRoutes } from 'react-router-dom'
import Header from './component/Header'
import routes from './routes'

export default function App() {

  // useRoutes根据路由表生成映射关系
  const element = useRoutes(routes)

  function computeClassName({ isActive }) {
    return isActive ? 'list-group-item active' : 'list-group-item'
  }

  return (
    <div>
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 路由链接 */}
            {/* 给路由链接添加高亮 */}
            <NavLink className={({ isActive }) => { return isActive ? 'list-group-item active' : 'list-group-item' }} to="/about">About</NavLink>
            {/* end属性  当跳转到子路由时，父路由的高亮效果会消失 */}
            <NavLink className={computeClassName} end to="/home">Home</NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 */}
              {element}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
