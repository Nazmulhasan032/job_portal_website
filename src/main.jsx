import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Blogs from './Components/Blogs/Blogs';
import Details from './Components/Details/Details';
import ErrorPage from './Components/ErrorPage';


const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: ()=> fetch('/JobData.json')
      },
      {
        path:'detail/:detailId',
        element:<Details></Details>,

      },
      {
        path:'statistics',
        element:<Statistics></Statistics>,
      },
      {
        path:'appliedJobs',
        element:<AppliedJobs></AppliedJobs>,
        loader: ()=> fetch('/JobData.json')
      },
      {
        path:'blogs',
        element: <Blogs></Blogs>
      },
      {
        path:'details',
        element: <Details></Details>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
