import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './styles/GlobalStyles.js'
import Home from './pages/Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <Home />
  </StrictMode>,
)
