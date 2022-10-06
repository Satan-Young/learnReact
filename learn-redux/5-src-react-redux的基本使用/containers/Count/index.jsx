// 引入CountUI组件
import CountUI from '../../component/Count'
// 引入connect函数连接redux和容器组件
import { connect } from 'react-redux'

import {
    createIncrementAction,
    createDecrementAction,
    createIncrementActionAsync
} from '../../redux/action'

/*
    mapStateToProps函数返回的是一个对象
    返回的对象中key作为props中的key，value作为props中的value
    mapStateToProps专用于传递状态

*/
const mapStateToProps = (state)=>{
    return {count:state}
}

/*
    mapDispatchToProps函数返回的是一个对象
    mapDispatchToProps用于传递操作对象的方法
*/
const mapDispatchToProps = (dispatch)=>{
    return{
        increment:(number)=>{dispatch(createIncrementAction(number))},
        decrement:(number)=>{dispatch(createDecrementAction(number))},
        incrementAsync:(number,time)=>{dispatch(createIncrementActionAsync(number,time))}
    }
}

// connect调用后返回一个函数再次调用传入的参数是UI组件
// connect调用时可以传入两个参数，都为函数，分别用来传递redux中的状态和传递用于操作状态的方法
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)
