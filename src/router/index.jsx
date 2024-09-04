import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import About from "../Components/About/About.jsx";
import Logout from "../Components/Logout/Logout.jsx";
import Login, { loginAction } from "../Components/Login/Login.jsx";
import Register, {registerAction} from "../Components/Register/Register.jsx";
import LayoutPublic from "../layout/LayoutPublic.jsx";
import Post from "../Components/Post/Post.jsx";
import Postularse from "../Components/Postularse/Postularse.jsx";
import { postAction } from "../Components/Post/Post.jsx";
import { appLoader, postularseLoader} from "../Constants/index.js";
import { sendEmail } from "../Components/Postularse/Postularse.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic />,
        children: [
            {
                index: true,
                element: <App />,
                loader:appLoader
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
        {
            path: "/registrarse",
            element: <Register />,
            action:registerAction
    
        },
        {
            path: "/post",
            element: <Post />,
            action:postAction
    
        },
        {
            path: "/postularse/:id",
            element: <Postularse />,
            loader:postularseLoader,
            action:sendEmail
    
        },

        ],
    },
]);