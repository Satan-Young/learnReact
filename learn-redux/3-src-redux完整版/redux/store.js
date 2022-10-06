/*
    该文件专用于暴露一个store对象，一个应用只有一个store对象
*/

// 引入legacy_createStore方法，专门创建redux中最核心的store
import { legacy_createStore } from "redux";
// 引入Count组件专用的reducer
import countReducer from './count-reducer'

export default legacy_createStore(countReducer)