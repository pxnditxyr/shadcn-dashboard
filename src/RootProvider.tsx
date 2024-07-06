import { RouterProvider } from 'react-router-dom'
import { router } from './router'

export const RootProvider = () => {
  return (
    <RouterProvider router={ router } />
  )
}
