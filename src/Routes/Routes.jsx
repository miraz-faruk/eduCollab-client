import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import CreateAssignments from "../pages/CreateAssignments/CreateAssignments";
import Assignments from "../pages/Assignments/Assignments";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/create-assignments",
                element: <PrivateRoutes><CreateAssignments></CreateAssignments></PrivateRoutes>
            },
            {
                path: "/assignments",
                element: <Assignments></Assignments>
            }
        ]
    },
]);

export default Routes;