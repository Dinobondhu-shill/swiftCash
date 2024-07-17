import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import MainPage from './Pages/MainPage';
import SignUp from './Pages/SignUp';
import AgentSignUp from './Pages/AgentSignUp';
import Login from './Pages/Login';
import AuthProvider from './Pages/AuthProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    path: '/agent-signup',
    element: <AgentSignUp />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
