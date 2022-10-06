/*
    该文件专用于暴露一个store对象，一个应用只有一个store对象
*/

// 引入legacy_createStore方法，专门创建redux中最核心的store
import { legacy_createStore ,applyMiddleware } from "redux";
// 引入Count组件专用的reducer
import countReducer from './count-reducer'
// 引入thunk中间件
import thunk from 'redux-thunk'

export default legacy_createStore(countReducer , applyMiddleware(thunk))