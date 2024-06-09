import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './Provider/Route.jsx'
import Authprovider from './Firebase/Authprovider/Authprovider.jsx'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Authprovider>
   <RouterProvider router={routes}> 

</RouterProvider>
   </Authprovider>
  </React.StrictMode>,
)
