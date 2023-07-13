import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";

import LogIn from "../Page/SharePage/Form/LogIn/LogIn";
import Register from "../Page/SharePage/Form/Register/Register";
import Home from "../Page/Home/Home";
import AllToy from "../Page/ALLToy/AllToy";
import Blogs from "../Page/Blogs/Blogs";
import Error from "../Page/Error/Error";
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
      
      }
      // {
      //   path:'/toy/:id',
      //   element:<SubCategories></SubCategories>,
      //   loader:({ params }) => fetch(`http://localhost:5000/toy/${params.id}`)
      // }
    ]
  },
]);

export default router;