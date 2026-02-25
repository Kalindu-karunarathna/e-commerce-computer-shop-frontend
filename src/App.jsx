import { useState } from 'react'

import './index.css'
import Test from './components/product-card'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage'
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/registerPage'
import AdminPage from './pages/adminPage'
import { Toaster } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
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
    
  );
}

export default App
