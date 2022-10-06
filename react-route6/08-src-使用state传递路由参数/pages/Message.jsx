import React from "react"
import { Link, Outlet } from "react-router-dom"

export default function Message() {
    const [message] = useState(
        [
            { id: '001', title: '消息一', content: '锄禾日当午' },
            { id: '002', title: '消息二', content: '汗滴禾下土' },
            { id: '003', title: '消息三', content: '谁知盘中餐' },
            { id: '004', title: '消息四', content: '粒粒皆辛苦' }
        ]
    )
    return (
        <div>
            <ul>
                {
                    message.map((item) => {
                        return (
                            <li key={item.id}>
                                <Link 
                                to='detail'
                                state={{
                                    id: item.id,
                                    title: item.title,
                                    content: item.content
                                }}
                                >{item.title}</Link>&nbsp;&nbsp;
                            </li>
                        )
                    })
                }
            </ul>
            <Outlet />
        </div>
    )
}