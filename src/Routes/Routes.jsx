import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Register from "../Authentication/Register/Register";
import Login from "../Authentication/Login/Login";
import SignOut from "../Authentication/SignOut/SignOut";
import Assignments from "../Pages/Assignments/Assignments";

// import MyAssignments from "../Pages/MyAssignments/MyAssignments";
import CreatAssignments from "../Pages/CreateAssignments/CreatAssignments";
import ViewAssignment from "../Pages/ViewAssignment/ViewAssignment";
import UpdateAssignment from "../Pages/UpdateAssignment/UpdateAssignment";
import Submission from "../Pages/Submission/Submission";

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
        {
          path: "/assignment",
          element: <Assignments></Assignments>,
        },
        {
          path: "/create-assignment",
          element:<CreatAssignments></CreatAssignments>
          ,
        },
        {
          path: "/assignment",
          element:<Assignments></Assignments>,
          
        },
        {
          path: "/viewAssignment/:_id",
          element:<ViewAssignment></ViewAssignment>,
          loader:({params}) => fetch(`http://localhost:5000/assignments/View/${params._id}`)
        },
        {
          path: "/UpdateAssignment/:_id",
          element:<UpdateAssignment></UpdateAssignment>,
          loader:({params}) => fetch(`http://localhost:5000/assignments/${params._id}`)
          
        },
        {
          path: "/takeAssignment",
          element:<Submission></Submission>,
          
        },
      ],
    },
   
  ]);

  export default router;