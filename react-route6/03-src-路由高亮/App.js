import React from 'react'
import{NavLink,Routes,Route,Navigate} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'

export default function App() {
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
            {/* 
              在路由6中可以通过函数的返回值来确定className
              该函数默认有一个参数是一个对象，有两个属性：isActive和isPending
              可以对该函数进行提取封装
            */}
            <NavLink className={({isActive})=>{return isActive ? 'list-group-item active' : 'list-group-item'}} to="/about">About</NavLink>
            <NavLink className={computeClassName} to="/home">Home</NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 */}
              <Routes>
                {/* 路由重定向 */}
                <Route path='/' element={<Navigate to='/about'/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/home' element={<Home/>}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
