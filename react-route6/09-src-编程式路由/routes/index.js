import { Navigate } from "react-router-dom";
import About from "../pages/About";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Message from "../pages/Message";
import News from "../pages/News";

// 导出路由表

const routeTable = [
    {
        path: '/about',
        element: <About />
    }, {
        path: '/home',
        element: <Home />,
        // 嵌套路由   子路由
        children:[
            {
                path:'news',
                element:<News/>
            },
            {
                path:'message',
                element:<Message/>,
                children:[
                    {
                        path:'detail',
                        element:<Detail/>
                    }
                ]
            }
        ]
    }, {
        path: '/',
        element: <Navigate to='/about'></Navigate>
    }
]

export default routeTable