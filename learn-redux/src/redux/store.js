/*
    该文件专用于暴露一个store对象，一个应用只有一个store对象
*/

// 引入legacy_createStore方法，专门创建redux中最核心的store
import { legacy_createStore ,applyMiddleware ,combineReducers} from "redux";
// 引入Count组件专用的reducer
import countReducer from './reducer/count'
import personReducer from "./reducer/person";
// 引入thunk中间件
import thunk from 'redux-thunk'

// 将多个reducer合并传给store
// combineReducers传入的对象就是store中对象
const allReducer = combineReducers({
    shuZi: countReducer,
    ren:personReducer
})

export default legacy_createStore(allReducer , applyMiddleware(thunk))