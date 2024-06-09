import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Estate from "../Pages/estate";
import Home from "../Pages/Home";




 
   const routes = createBrowserRouter([
            {
              path: "/",
              element: <Root></Root>,
              children:[
                {
                    path:'/',
                    element:<Home></Home>,
                    loader: ()=> fetch('data.json')
                },
                {
                  path: '/register',
                  element:<Register></Register>
                },
                {
                  path:'/login',
                  element:<Login></Login>
                },
                {
                  path:'/estate',
                  element: <Estate></Estate>
                }
              ]
            },
          ]);
   

      
        

export default routes;