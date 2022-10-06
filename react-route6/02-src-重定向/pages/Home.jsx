import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Home() {
  const [num, setNum] = React.useState(1)
  return (
    <div>
      <h3>我是Home的内容</h3>
      {
        num === 2 ? <Navigate to='/about'></Navigate> : <h4>当前sum值为：{num}</h4>
      }
      <button onClick={()=>{setNum(2)}}>点我num值变为2，并跳转页面</button>
    </div>
  )
}
