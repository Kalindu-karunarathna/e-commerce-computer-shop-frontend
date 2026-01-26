import Header from "../components/header"
import { Route, Routes } from 'react-router-dom'


export default function HomePage(){
    return(
        <div className="w-full h-full max-h-full overflow-y-auto">
           <Header/>
           <div className="w-full min-h-[calc(100%-100px)] bg-primary">
                <Routes>
                    <Route path="/" element={<h1>Home page</h1>}/>
                    <Route path="/products" element={<h1>Products</h1>}/>
                    <Route path="/about" element={<h1>about</h1>}/>
                    <Route path="/contact" element={<h1>contacts</h1>}/>
                </Routes>
           </div>

        </div>
    )
}