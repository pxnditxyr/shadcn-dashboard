import { createBrowserRouter, Navigate } from 'react-router-dom'
import { AccordionPage, AlertDialogPage, AlertsPage, ButtonsPage, DashboardLayout, DashboardPage, HomeLayout, HomePage } from '../routes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/dashboard" replace={ true } />
      }
    ]
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '',
        element: <DashboardPage />
      },
      {
        path: 'accordion',
        element: <AccordionPage />
      },
      {
        path: 'alerts',
        element: <AlertsPage />
      },
      {
        path: 'buttons',
        element: <ButtonsPage />
      },
      {
        path: 'alert-dialog',
        element: <AlertDialogPage />
      }
    ]
  }
])
