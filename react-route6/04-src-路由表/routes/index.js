import { Navigate } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";

// 导出路由表
export default [
    {
        path: '/about',
        element: <About />
    }, {
        path: '/home',
        element: <Home />
    }, {
        path: '/',
        element: <Navigate to='/about'></Navigate>
    }
]