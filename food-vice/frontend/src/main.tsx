import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.tsx'
import ScrollToTop from './components/ScrollToTop.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { AuthProvider } from './context/AuthContext.tsx'



createRoot(document.getElementById('root')!).render(
  

    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID as string}>
      <BrowserRouter>

        <ScrollToTop />
        <AuthProvider>
          <App />
        </AuthProvider>

      </BrowserRouter>
    </GoogleOAuthProvider>


  
)
