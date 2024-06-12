import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import About from "../Components/About/About.jsx";
import Logout from "../Components/Logout/Logout.jsx";
import Login, { loginAction } from "../Components/Login/Login.jsx";
import LayoutPublic from "../layout/LayoutPublic.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic />,
        children: [
            {
                index: true,
                element: <App />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/logout",
                element: <Logout />,
            },
            {
            path: "/login",
            element: <Login />,
            action:loginAction
        },

        ],
    },
]);