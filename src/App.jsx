import { useState } from 'react'

import './index.css'
import Test from './components/product-card'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage'
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/registerPage'
import AdminPage from './pages/adminPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className='w-full h-screen'>
         <Routes path="/">
              <Route path = "/" element={<HomePage/>}/>
              <Route path = "login" element={<LoginPage/>}/>
              <Route path = "register" element={<RegisterPage/>}/>
              <Route path = "admin" element={<AdminPage/>}/>
         </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App
