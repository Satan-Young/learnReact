import React from 'react'
import{NavLink, useRoutes} from 'react-router-dom'
import routes from './routes'

export default function App() {

  // useRoutes根据路由表生成映射关系
  const element = useRoutes(routes)

  function computeClassName ({isActive}){
    return isActive ? 'list-group-item active' : 'list-group-item'
  }

  return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header"><h2>React Router Demo</h2></div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 路由链接 */}
            {/* 给路由链接添加高亮 */}
            <NavLink className={({isActive})=>{return isActive ? 'list-group-item active' : 'list-group-item'}} to="/about">About</NavLink>
            <NavLink className={computeClassName} to="/home">Home</NavLink>
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
