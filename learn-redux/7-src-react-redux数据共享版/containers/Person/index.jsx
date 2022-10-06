import { nanoid } from 'nanoid';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import {createAddPersonAction} from '../../redux/action/person'

class Person extends Component {

    add = ()=>{
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = {id:nanoid(),name,age}
        this.props.addPerson(personObj)
    }

  render() {
    return (
      <div>
        <h2>Person组件,上面组件的求和为：{this.props.zongHe}</h2>
        <input ref={c => {this.nameNode = c}} type="text" placeholder='请输入名字'/>
        <input ref={c => {this.ageNode = c}} type="text" placeholder='请输入年龄'/>
        <button onClick={this.add}>加入列表</button>
        {
          this.props.renShu.map((p)=>{
            return (<li key={p.id}>{p.name}---------{p.age}</li>)
          })
        }
      </div>
    )
  }
}

export default connect(
  // 映射状态
  (state)=>{
    return {
      renShu:state.ren,
      zongHe:state.shuZi
    }
  },{
    addPerson:createAddPersonAction
  }
)(Person)
