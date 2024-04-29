import { createBrowserRouter } from 'react-router-dom';

import SignUp from './views/Signup.jsx';
import App from './App.jsx';
import ErrorPage from './Error-page.jsx';
import Home from "./views/Home.jsx";
import HomePage from "./components/home/HomePage.jsx";
import BordPage from "./components/home/BordPage.jsx";
import Login from "./views/login.jsx";
import Forgot from "./views/Forgot.jsx";
import Usersettings from "./views/Usersettings.jsx";
import About from "./views/About.jsx";

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
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/home/bord/:userID/:tableID",
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
  },
  {
  path: "/about",
  element: <About />
  }
]);
