import { createBrowserRouter ,} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <p>This is an error</p>,
      children:[
        {
            path: "/",
            element: <Home />
        },
      ]
    },
  ]);