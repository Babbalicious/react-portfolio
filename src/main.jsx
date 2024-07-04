import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import App from './App.jsx';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';
import ErrorPage from './pages/ErrorPage.jsx';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Resume from './pages/Resume.jsx';
import Contact from './pages/Contact.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
      index: true,
      element: <About />
      },
      {
        path: '/portfolio',
        element: <Portfolio />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/resume',
        element: <Resume />
      }

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
