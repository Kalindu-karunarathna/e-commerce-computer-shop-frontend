
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage'
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/registerPage'
import AdminPage from './pages/adminPage'
import { Toaster } from 'react-hot-toast'
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_LOGIN_CLIENT_ID}>
      <BrowserRouter>
        <Toaster position="top-right"/> 

        <div className='w-full h-screen bg-primary'>
          <Routes path="/">
                <Route path = "/*" element={<HomePage/>}/>
                <Route path = "login" element={<LoginPage/>}/>
                <Route path = "register" element={<RegisterPage/>}/>
                <Route path = "admin/*" element={<AdminPage/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App
