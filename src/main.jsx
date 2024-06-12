import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthContextProvider from './auth/authContext.jsx';
import { router } from "./router";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <AuthContextProvider> 
                 <RouterProvider router={router} />
        </AuthContextProvider>

  </React.StrictMode>,
)
