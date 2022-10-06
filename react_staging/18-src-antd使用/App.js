import React, { Component } from 'react'
import { Button,DatePicker,Space } from 'antd'
import {TwitterOutlined} from '@ant-design/icons'

export default class App extends Component {
  onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  render() {
    return (
      <div>
        <Button type='primary'>按钮一</Button>
        <TwitterOutlined />
        <Space direction="vertical">
          <DatePicker onChange={this.onChange} />
          <DatePicker onChange={this.onChange} picker="week" />
          <DatePicker onChange={this.onChange} picker="month" />
          <DatePicker onChange={this.onChange} picker="quarter" />
          <DatePicker onChange={this.onChange} picker="year" />
        </Space>
      </div>
    )
  }
}
