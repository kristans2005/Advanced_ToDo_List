import {
    createBrowserRouter
} from "react-router-dom";

import Login from "./views/Signup.jsx";
import App from './App.jsx'
import ErrorPage from './Error-page.jsx';
import { Home } from "./views/home.jsx";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />
  },
])