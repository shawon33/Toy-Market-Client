import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";

import LogIn from "../Page/SharePage/Form/LogIn/LogIn";
import Register from "../Page/SharePage/Form/Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'login',
            element:<LogIn></LogIn>
        },
        {
            path:'register',
            element:<Register></Register>
        }
      ]
    },
  ]);

  export default router;