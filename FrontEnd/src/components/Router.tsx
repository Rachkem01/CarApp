

import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Cart from "./Cart";
import Display from "./Display";
import Video from "./Video";

export const router = createBrowserRouter([
    {path:'/', element:<App/>,
children:[
    {path:'/video', element:<Video/>},
    {path:'/AllCars', element:<Display/>},
    {path:'/Cart', element:<Cart/>}
]
}
])


