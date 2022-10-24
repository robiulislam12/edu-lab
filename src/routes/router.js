import { createBrowserRouter } from "react-router-dom";
import ErrorComponent from "../components/ErrorCompont";
import Main from "../layouts/Main";
import Home from "../pages/Home";

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
        ]
    }
])

export default router;