import {INCREMENT,DECREMENT} from './constant'

// 同步action,返回的是一个Object类型的一般对象
export const createIncrementAction = (date)=>{return {type:INCREMENT,date}}
export const createDecrementAction = (date)=>{return {type:DECREMENT,date}}

// 异步action,返回的是一个函数，因为只有在函数中才可以写一些异步操作
export const createIncrementActionAsync = (date,time)=>{
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(createIncrementAction(date))
        }, time);
    }
}