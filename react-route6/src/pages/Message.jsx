import React, { useState } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"

export default function Message() {
    const navigate = useNavigate()
    const [message] = useState(
        [
            { id: '001', title: '消息一', content: '锄禾日当午' },
            { id: '002', title: '消息二', content: '汗滴禾下土' },
            { id: '003', title: '消息三', content: '谁知盘中餐' },
            { id: '004', title: '消息四', content: '粒粒皆辛苦' }
        ]
    )

    // 指定具体路由跳转
    function showDetail(item) {
        // 这个函数传入两个参数  路径   选项
        // 选项也只有两个  replace   和   state
        navigate('detail',
            {
                relative: false,
                state: {
                    id: item.id,
                    title: item.title,
                    content: item.content,
                }
            }
        )
    }

    return (
        <div>
            <ul>
                {
                    message.map((item) => {
                        return (
                            <div key={item.id}>
                                <li >
                                    <Link
                                        to='detail'
                                        state={{
                                            id: item.id,
                                            title: item.title,
                                            content: item.content
                                        }}
                                    >{item.title}</Link>&nbsp;&nbsp;
                                </li>
                                <button onClick={()=>{return showDetail(item)}}>点我</button>
                            </div>
                        )
                    })
                }
            </ul>
            <Outlet />
        </div>
    )
}