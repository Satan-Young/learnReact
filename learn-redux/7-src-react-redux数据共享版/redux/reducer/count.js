/*
    该文件用于创建一个Count组件专用reducer，其本质是一个函数
    reducer函数会接收两个参数：preState(之前对象),action(动作对象)
*/
import {INCREMENT,DECREMENT} from '../constant'

const initState = 0
export default function countReducer(preState = initState,action){
    const {type,date} = action
    switch (type) {
        case INCREMENT:
            return preState+date;
        case DECREMENT:
            return preState-date;
        default:
            return preState
    }
}