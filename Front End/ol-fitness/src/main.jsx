import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'

import RootLayout from './routes/RootLayout';
import Home from './routes/Home';
import ContactMe, {action as newInquiryAction} from './routes/ContactMe';
import Services from './routes/Services';
import Faq from './routes/Faq';
import Calendar from './components/calendar/Calendar';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/',
    element: <RootLayout />,
    children: [
      { path: '/',
        element: <Home />,
        children: [
          { path: '/contact-me',
            element: <ContactMe />,
            action: newInquiryAction
          },
          {
            path: '/faq',
            element: <Faq />
          }
        ]
      },
      { path: '/services',
        element: <Services />,
        children: [
          { path: '/services/book/:serviceId',
            element: <Calendar />
          }
        ]
      },
    ]
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
