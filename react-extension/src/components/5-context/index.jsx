import React, { Component } from 'react'
import './index.css'

const MyContext = React.createContext()
export default class Demo extends Component {
    state = {
        username:'tom',
        age:18
    }
    
  render() {
    const {username,age} = this.state
    return (
      <div className='parent'>
        <h2>我是祖先组件</h2>
        <MyContext.Provider value={{username,age}}>
          <B></B>
        </MyContext.Provider>
      </div>
    )
  }
}
class B extends Component {
  render() {
    return (
      <div className='father'>
        <h2>我是父亲组件</h2>
        <C></C>
      </div>
    )
  }
}
// class C extends Component {
//     static contextType = MyContext
//   render() {
//     return (
//       <div className='son'>
//         <h2>我是子组件  用户名:{this.context.username},年龄:{this.context.age}</h2>
//       </div>
//     )
//   }
// }

function C() {
    return (
        <div className='son'>
            <MyContext.Consumer>
                {
                    (value)=>{
                        console.log(value);
                        // return `我是子组件  用户名:${value.username},年龄:${value.age}`
                        return <h2>我是子组件用户名:{value.username},年龄:{value.age}</h2>
                    }
                }
            </MyContext.Consumer>
        </div>
    )
}