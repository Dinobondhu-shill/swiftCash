import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import MainPage from './Pages/MainPage';
import SignUp from './Pages/SignUp';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
  },
  {
    path: "/sign-up",
    element : <SignUp></SignUp>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
