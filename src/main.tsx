import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Routing } from './routing'
import { ThemeProvider } from './context/ThemeContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Routing />
    </ThemeProvider>
  </StrictMode>,
)
