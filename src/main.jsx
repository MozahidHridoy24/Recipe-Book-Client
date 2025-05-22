import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { router } from './components/Routes/Routes.jsx'
import { RouterProvider } from 'react-router'
import AuthProvider from './components/Contexts/AuthContext.jsx'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
     <RouterProvider router={router} />
   </AuthProvider>
   <ToastContainer position="top-right" autoClose={3000} />
  </StrictMode>,
)
