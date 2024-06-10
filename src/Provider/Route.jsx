import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Estate from "../Pages/estate";
import Home from "../Pages/Home";
import PrivateRoute from "../Firebase/PrivateRoute";




 
   const routes = createBrowserRouter([
            {
              path: "/",
              element: <Root></Root>,
              children:[
                {
                    path:'/',
                    element:<Home></Home>,
                    loader: ()=> fetch('/data.json')
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
                  path:'/estate/:id',
                  element: <PrivateRoute><Estate></Estate></PrivateRoute>,
                  loader: () =>fetch('/data.json')
                }
              ]
            },
          ]);
   

      
        

export default routes;