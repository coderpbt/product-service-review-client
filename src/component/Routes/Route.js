import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Pages/Blog/Blog/Blog";
import ErrorElement from "../../Pages/ErrorElement/ErrorElement";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/ServicesAll/Services";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement : <ErrorElement />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/home',
        element:<Home />
      },
      {
        path:'/services',
        element: <Services />
      },
      {
        path:'/blog',
        element:<Blog />
      },
      {
        path:'*',
        element: <ErrorElement />
      }
    ]
  },
]);