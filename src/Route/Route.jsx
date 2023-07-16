import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";

import LogIn from "../Page/SharePage/Form/LogIn/LogIn";
import Register from "../Page/SharePage/Form/Register/Register";
import Home from "../Page/Home/Home";
import AllToy from "../Page/ALLToy/AllToy";
import Blogs from "../Page/Blogs/Blogs";
import Error from "../Page/Error/Error";
import ToyInfo from "../Page/Home/Sub-Categories/ToyInfo";
import PrivateRoute from "../AuthProvider/PrivateRoute";
import AddToy from "../Page/AddToy/AddToy";
import MyToyPage from "../Page/MyToyPage/MyToyPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <LogIn></LogIn>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path:"blogs",
        element:<Blogs></Blogs>
      },
      {
        path: 'allToys',
        element:<AllToy></AllToy>
      
      },
      {
        path:'/toys/:id',
        element:<PrivateRoute><ToyInfo></ToyInfo></PrivateRoute>,
        loader:({ params }) => fetch(`http://localhost:5000/toys/${params.id}`)
      },
      {
        path:'addToy',
        element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      {
        path:'myToy',
        element:<PrivateRoute><MyToyPage></MyToyPage></PrivateRoute>
      }
    ]
  },
]);

export default router;