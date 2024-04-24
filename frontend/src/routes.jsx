import {
  createBrowserRouter,
} from "react-router-dom";

import SignUp from "./views/Signup.jsx";
import App from './App.jsx';
import ErrorPage from './Error-page.jsx';
import Home from "./views/home.jsx";
import HomePage from "./components/home/HomePage.jsx";
import BordPage from "./components/home/BordPage.jsx";
import Login from "./views/login.jsx";
import Forgot from "./views/Forgot.jsx";
import Usersettings from "./views/Usersettings.jsx";

export const routers = createBrowserRouter([
  {
    path: "/", // Root path
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home", // Parent route
    element: <Home />,
    children: [
      {
        path: "/home", // Relative path to the parent route ("/home")
        element: <HomePage />,
      },
      {
        path: "/home/bord", // Relative path to the parent route ("/home")
        element: <BordPage />,
      },
    ]
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot",
    element: <Forgot />,
  },
  {
    path: "/usersettings",
    element: <Usersettings />
  }
]);
