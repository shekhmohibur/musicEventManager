import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import { Children } from "react";
import AboutUs from "../pages/AboutUs";
import NotFound from "../pages/NotFound";
import Hero from "../components/Hero";

const Router = createBrowserRouter ([
    {
        path:'/',
        element: <HomeLayout/>,
        children: [
            {
                path:'/about-us',
                element: <AboutUs/>
            },
            {
                path:"",
                element:<Hero/>
            }
        ]
    },
    {
        path:'*',
        element: <NotFound/>
    }
    
])
export default Router;