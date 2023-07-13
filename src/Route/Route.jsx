import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";

import LogIn from "../Page/SharePage/Form/LogIn/LogIn";
import Register from "../Page/SharePage/Form/Register/Register";
import Home from "../Page/Home/Home";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
            path:'login',
            element:<LogIn></LogIn>
        },
        {
            path:'register',
            element:<Register></Register>
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