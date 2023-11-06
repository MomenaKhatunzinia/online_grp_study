import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Register from "../Authentication/Register/Register";
import Login from "../Authentication/Login/Login";
import SignOut from "../Authentication/SignOut/SignOut";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signOut",
          element: <SignOut></SignOut>,
        },
      ],
    },
   
  ]);

  export default router;