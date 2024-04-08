import React from 'react'
import ReactDOM from 'react-dom/client'
import {
HelmetProvider} from "react-helmet-async"
import 'react-toastify/dist/ReactToastify.css';
import  { Toaster } from 'react-hot-toast';

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routeses/Routes.jsx'
import AuthProvider from './Prrovider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <HelmetProvider>
    <AuthProvider><RouterProvider router={router}>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </RouterProvider>
    </AuthProvider>
    </HelmetProvider>
   
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
  </React.StrictMode>,
)
