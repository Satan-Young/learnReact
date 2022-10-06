import {ADD_PERSON} from '../constant'

const initState = [{id:'000',name:'张三',age:18}]
export default function personReducer (preState = initState,action) {
    const {type,date} = action
    switch (type) {
        case ADD_PERSON:
            return [date,...preState]
        default:
            return preState
    }
}