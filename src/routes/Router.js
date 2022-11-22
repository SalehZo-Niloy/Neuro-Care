import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Appointment from "../pages/Appointment/Appointment/Appointment";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import MyAppointment from "../pages/Dashboard/MyAppointment/MyAppointment";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AdminRoute from "./AdminRoute/AdminRoute";
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
        path: '/dashboard', element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard', element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allUsers', element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
        ]
    }
])

export default router;