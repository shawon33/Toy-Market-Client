import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import router from './Route/Route.jsx'


import {RouterProvider,} from "react-router-dom";
import AuthPovider from './AuthProvider/AuthPovider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthPovider> <RouterProvider router={router} /></AuthPovider>
  </React.StrictMode>,
)
