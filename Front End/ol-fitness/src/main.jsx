import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'

import RootLayout from './routes/RootLayout';
import Home from './routes/Home';
import ContactMe from './routes/ContactMe';
import Services from './routes/Services';
import Faq from './routes/Faq';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/',
    element: <RootLayout />,
    children: [
      { path: '/',
        element: <Home />,
        children: [
          { path: '/contact-me',
            element: <ContactMe />
          },
          {
            path: '/faq',
            element: <Faq />
          }
        ]
      },
      { path: '/services',
        element: <Services />
      },
    ]
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
