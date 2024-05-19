import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import NotFound from './routes/NotFound.jsx';
import Login from './routes/Login.jsx';
import Signup from './routes/Signup.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { UserProvider } from './context/User';
import DashUserPage from './routes/DashUser.jsx';
import DashAdminPage from './routes/DashAdmin.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/dashboard-admin",
    element: <DashAdminPage/>
  },
  {
    path: "/dashboard-usuario", 
    element: <DashUserPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </UserProvider>,
);
