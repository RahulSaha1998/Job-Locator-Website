import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Main from './components/layout/Main';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/Applied-jobs/AppliedJobs';
import JobDetails from './components/JobDetails/JobDetails';
import NotFound from './components/NotFound/NotFound';
import appliedJobsLoader from './loaders/appliedJobsLoader';
import { ToastContainer, toast } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/category.json')
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/appliedJob',
        element: <AppliedJobs></AppliedJobs>,
        loader: appliedJobsLoader
      },
      {
        path: '/jobDetails/:id',
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => fetch(`/jobdata.json`)
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>,
)
