import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react'
import App from './App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/chat/'>
      <NextUIProvider>
        <main className="dark text-dark">
          <App />
        </main>
      </NextUIProvider>
    </BrowserRouter>
  </StrictMode>,
)
