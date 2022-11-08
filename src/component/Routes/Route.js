import { createBrowserRouter } from "react-router-dom";
import AddServices from "../../Pages/AddServices/AddServices";
import Blog from "../../Pages/Blog/Blog/Blog";
import ErrorElement from "../../Pages/ErrorElement/ErrorElement";
import Home from "../../Pages/Home/Home/Home";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import Services from "../../Pages/ServicesAll/Services";
import Main from "../Layout/Main";
import Login from "../Sheard/Login/Login";
import Register from "../Sheard/Register/Register";


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
        loader: () => fetch('http://localhost:4000/servicesall'),
        element: <Services />
      },
      {
        path:'/services/:id',
        loader: ({params}) => fetch(`http://localhost:4000/services/${params.id}`),
        element: <ServiceDetails />
      },
      {
        path:'/blog',
        element:<Blog />
      },
      {
        path:'/login',
        element:<Login />
      },
      {
        path:'/register',
        element:<Register />
      },
      {
        path:'/addservice',
        element:<AddServices />
      },
    ]
  },
]);