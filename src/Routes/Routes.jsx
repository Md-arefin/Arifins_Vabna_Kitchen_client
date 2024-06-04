import { createBrowserRouter ,} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Authentication/Login/Login";
import SignIn from "../pages/Authentication/SignIn/SignIn";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children:[
        {
            path: "/",
            element: <Home />
        },
      ]
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <SignIn />
    }
  ]);