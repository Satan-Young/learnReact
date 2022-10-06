import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

  getStudentDate = () => {
    axios.get('http://localhost:3000/api1/students')
    .then((res)=>{console.log(res.data);})
    .catch((err)=>{console.log(err);})
  }
  
  getCarDate = () => {
    axios.get('http://localhost:3000/api2/cars')
    .then((res)=>{console.log(res.data);})
    .catch((err)=>{console.log(err);})
  }
  

  render() {
    return (
      <div>
        <button onClick={this.getStudentDate}>请求学生数据</button>
        <button onClick={this.getCarDate}>请求汽车数据</button>
      </div>
    )
  }
}
