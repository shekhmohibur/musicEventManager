import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";

const Router = createBrowserRouter ([
    {
        path:'/',
        element: <HomeLayout/>
    }
])
export default Router;