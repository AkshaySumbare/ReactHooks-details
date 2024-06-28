import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './components/ContextAPI/userContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <App />
  </AppProvider>,
  // <StrictMode>
  //   <App/>
  // </StrictMode>
)
