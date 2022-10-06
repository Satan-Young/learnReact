import React, { Component } from 'react'
// import qs from'qs'

export default class Details extends Component {
  state = {
    detailsDate:[
        {
            id:'001',
            content:'Hello China'
        },{
            id:'002',
            content:'Hello World'
        },{
            id:'003',
            content:'Hello Future'
        },
    ]
  }
  render() {
    console.log(this.props);
    // 获取params传递来的参数
    // const {id,title} = this.props.match.params

    // 获取query传递来的参数
    // const {id,title} = qs.parse(this.props.location.search.slice(1))

    // 获取state传递来的参数
    const {id,title} = this.props.location.state

    const findRes = this.state.detailsDate.find((item)=>{
        return id === item.id
    })
    return (
      <div>
        <ul>
            <li>id:{id}</li>
            <li>title:{title}</li>
            <li>content:{findRes.content}</li>
        </ul>
      </div>
    )
  }
}
