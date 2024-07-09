import { createBrowserRouter } from 'react-router-dom'
import { AccordionPage, AlertsPage, ButtonsPage, DashboardLayout, DashboardPage, HomeLayout, HomePage } from '../routes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
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
      }
    ]
  }
])
