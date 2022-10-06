import React from 'react'
// import ReactDOM from'react-dom'
import root from '../../index'

function Demo() {
    const [count,setCount] = React.useState(0)
    const myRef = React.useRef()
    // console.log(React.useState(0));
    function add(){
        // setCount(count+1)
        setCount((count)=>{return count+1})
    }
    function unMount() {
       root.unmount()
    }
    React.useEffect(()=>{
        const timer = setInterval(() => {
            add()
        }, 1000);
        return ()=>{
            clearInterval(timer)
        }
    },[])
    function show() {
        console.log(myRef);
        alert(myRef.current.value)
    }
    return(
        <div>
            <input type="text"  ref={myRef}/>
            <h2>当前count值:{count}</h2>
            {/* <button onClick={add}>点我+1</button> */}
            <button onClick={unMount}>点我卸载组件</button>
            <button onClick={show}>点我展示输入框内容</button>
        </div>
    )
}

export default Demo 
