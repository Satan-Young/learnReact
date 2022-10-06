import React from "react";
import { useSearchParams ,useLocation } from "react-router-dom";

export default function Detail() {
    const [search , setSearch] = useSearchParams()
    const id = search.get('id')
    const title = search.get('title')
    const content = search.get('content')
    console.log(id,title,content);
    const x = useLocation()
    console.log(x);
    return(
        <ul>
            <button onClick={()=>{setSearch('id=hh&title=hh&content=hh')}}>点我更改收到的search参数</button>
            <li>消息编号：{id}</li>
            <li>消息标题：{title}</li>
            <li>消息内容：{content}</li>
        </ul>
    )
}