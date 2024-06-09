import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";




 
   const routes = createBrowserRouter([
            {
              path: "/",
              element: <Root></Root>,
              children:[
                {
                    path:'/',
                    element: <p>Home</p>
                }
              ]
            },
          ]);
   

      
        

export default routes;