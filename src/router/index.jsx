import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import About from "../Components/About/About.jsx";
import LayoutPublic from "../layout/LayoutPublic";

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

        ],
    },
]);