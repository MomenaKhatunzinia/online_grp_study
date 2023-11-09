import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Register from "../Authentication/Register/Register";
import Login from "../Authentication/Login/Login";
import SignOut from "../Authentication/SignOut/SignOut";
import Assignments from "../Pages/Assignments/Assignments";
import CreatAssignments from "../Pages/CreateAssignments/CreatAssignments";
import ViewAssignment from "../Pages/ViewAssignment/ViewAssignment";
import UpdateAssignment from "../Pages/UpdateAssignment/UpdateAssignment";
import Submission from "../Pages/Submission/Submission";
import SubmittedAssignment from "../Pages/SubmittedAssignment/SubmittedAssignment";
import PrivateRoute from "../Routes/PrivateRoute/PrivateRoute"
import MyAssignments from "../Pages/MyAssignments/MyAssignments";
import ErrorPage from "../ErrorPage/ErrorPage";
import ContactUs from "../Pages/ContaceUs/ContactUs"

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
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
          path: "/contactUs",
          element: <ContactUs></ContactUs>,
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
          element:<PrivateRoute>
            <CreatAssignments></CreatAssignments>
          </PrivateRoute>
          ,
        },
        {
          path: "/assignment",
          element:<Assignments></Assignments>,
          
        },
        {
          path: "/my-assignment",
          element:<PrivateRoute>
            <MyAssignments></MyAssignments>
          </PrivateRoute>,
          loader:() => fetch(`https://online-grpstudy-asg-server.vercel.app/assignments/submitted`)

          
        },
        {
          path: "/viewAssignment/:_id",
          element:<PrivateRoute><ViewAssignment></ViewAssignment></PrivateRoute>,
          loader:({params}) => fetch(`https://online-grpstudy-asg-server.vercel.app/assignments/View/${params._id}`)
        },
        {
          path: "/UpdateAssignment/:_id",
          element:<PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>,
          loader:({params}) => fetch(`https://online-grpstudy-asg-server.vercel.app/assignments/${params._id}`)
          
        },
        {
          path: "/takeAssignment/:mark/:title/:_id",
          element:<PrivateRoute><Submission></Submission></PrivateRoute>,
          
        },
        {
          path: "/Submittedassignment",
          element:<PrivateRoute><SubmittedAssignment></SubmittedAssignment></PrivateRoute>,
          
          loader:()=> fetch('https://localhost5000/assignments/submitted')
        },
      ],
    },
   
  ]);

  export default router;