import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Appointment from "../pages/Appointment/Appointment/Appointment";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/home', element: <Home></Home>
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/register', element: <Register></Register>
            },
            {
                path: '/appointment', element: <Appointment></Appointment>
            },
        ]
    },
    {
        path: '/dashboard', element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    }
])

export default router;