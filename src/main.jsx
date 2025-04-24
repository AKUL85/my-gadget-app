import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Style.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './components/root/Root';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Statistic from './components/Statistic/Statistic';
import ProductDetails from './components/Product_details/ProductDetails';
import DashBoard from './components/Dashboard/DashBoard';
import Review from './components/Review/Review';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,

    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/statistic",
        element:<Statistic></Statistic>
      },
      {
        path:"productDetails/:product_id",
        element:<ProductDetails></ProductDetails>,
        loader: () => fetch("/gadgetData.json")

      },
      {
        path:"/dashboard",
        element:<DashBoard></DashBoard>,
        loader: () => fetch("/gadgetData.json")
      },
      {
        path:"/review",
        element:<Review></Review>
      }
      

    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />
  </StrictMode>,
)
