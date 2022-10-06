// 引入react核心库
import React from "react";
// 引入reactDOM库
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
// 引入App组件
import App from './App'

// 渲染组件到页面
// ReactDOM.render(<App/>,document.getElementById('root'))
createRoot(document.getElementById('root')).render(<App/>)