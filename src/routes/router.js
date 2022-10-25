import { createBrowserRouter } from "react-router-dom";
import ErrorComponent from "../components/ErrorCompont";
import Main from "../layouts/Main";
import About from "../pages/About";
import Blogs from "../pages/Blogs";
import Courses from "../pages/Courses";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorComponent/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/courses',
                loader: () => fetch('http://localhost:5000/courses'),
                element: <Courses/>,
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/blogs',
                element: <Blogs/>
            },
            {
                path: '/blogs',
                element: <Blogs/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
        ]
    }
])

export default router;