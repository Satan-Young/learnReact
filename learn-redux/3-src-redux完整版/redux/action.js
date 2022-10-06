import {INCREMENT,DECREMENT} from './constant'

export const createIncrementAction = (date)=>{return {type:INCREMENT,date}}
export const createDecrementAction = (date)=>{return {type:DECREMENT,date}}