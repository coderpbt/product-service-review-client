import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../../context/PrivateRoute/PrivateRoute";
import AddServices from "../../Pages/AddServices/AddServices";
import Blog from "../../Pages/Blog/Blog/Blog";
import ErrorElement from "../../Pages/ErrorElement/ErrorElement";
import Home from "../../Pages/Home/Home/Home";
import MyReview from "../../Pages/MyReview/MyReview";
import UpdateReview from "../../Pages/MyReview/UpdateReview";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import Services from "../../Pages/ServicesAll/Services";
import Main from "../Layout/Main";
import Login from "../Sheard/Login/Login";
import Register from "../Sheard/Register/Register";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
        loader: () => fetch('https://b6a11-service-review-server-side-coderpbt.vercel.app/servicesall'),
        element: <Services />
      },
      {
        path:'/services/:id',
        loader: ({params}) => fetch(`https://b6a11-service-review-server-side-coderpbt.vercel.app/services/${params.id}`),
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
        element:<PrivateRoute><AddServices /></PrivateRoute>
      },
      {
        path:'/reviews/:id',
        loader: ({params}) => fetch(`https://b6a11-service-review-server-side-coderpbt.vercel.app/reviews/${params.id}`),
        element:<MyReview />
      },
      {
        path:'/reviews',
        element:<PrivateRoute><MyReview /></PrivateRoute>
      },
      {
        path:'/reviews/edit/:id',
        element:<UpdateReview />
      },
   
    ]
  },
  {
    path:'*',
    element:  <ErrorElement />,
  },
]);