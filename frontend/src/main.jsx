import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'
// import {Provider} from 'reac'
// import { configureStore } from '@reduxjs/toolkit'

// const Store = configureStore({
//   reducer:rootre
// })
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      <App />
      <Toaster position="top-right" reverseOrder={true}/>
    </BrowserRouter>
  </StrictMode>,
)
