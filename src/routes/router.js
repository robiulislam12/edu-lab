import { createBrowserRouter } from "react-router-dom";
import ErrorComponent from "../components/ErrorCompont";
import Main from "../layouts/Main";
import About from "../pages/About";
import Blogs from "../pages/Blogs";
import CheckOut from "../pages/CheckOut";
import CourseDetails from "../pages/CourseDetails";
import Courses from "../pages/Courses";
import Faq from "../pages/Faq";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";

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
                loader: () => fetch('https://server-xi-six.vercel.app/courses/'),
                element: <Courses/>,
            },
            {
                path: '/courses/:id',
                element: <CourseDetails/>,
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut/></PrivateRoute>
            },
            {
                path: '/blogs',
                element: <Blogs/>
            },
            {
                path: '/faq',
                element: <Faq/>
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