import {
    createBrowserRouter
} from "react-router-dom";

import SignUp from "./views/Signup.jsx";
import App from './App.jsx';
import ErrorPage from './Error-page.jsx';
import { Home } from "./views/home.jsx";
import Login from "./views/login.jsx";

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
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
])