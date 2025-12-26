import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import { Children } from "react";
import AboutUs from "../pages/AboutUs";
import NotFound from "../pages/NotFound";

const Router = createBrowserRouter ([
    {
        path:'/',
        element: <HomeLayout/>,
        children: [
            {
                path:'/about-us',
                element: <AboutUs/>
            }
        ]
    },
    {
        path:'*',
        element: <NotFound/>
    }
    
])
export default Router;