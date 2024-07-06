import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RootProvider } from './RootProvider.tsx'

import './index.css'

createRoot( document.getElementById( 'root' )! ).render(
  <StrictMode>
    <RootProvider />
  </StrictMode>,
)
