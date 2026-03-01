import { Link, Route, Routes } from 'react-router-dom'
import { LuClipboardList,LuBoxes,LuUsers,LuMessageSquareMore } from "react-icons/lu";
import AdminProductPage from './admin/adminProductPage';
import AdminAddProduct from './admin/adminAddProducts';


export default function AdminPage(){
    return(
        <div className="w-full h-full flex max-h-full bg-secondary">


            <div className="w-[200px] h-full bg-secondary">
                <div className="w-full h-[100px] flex items-center border-[5px] border-secondary rounded-2xl bg-primary ">
                    <img src="/logo.png" alt="logo" className="h-full" />
                    <h1 className="text-3xl">Admin Pannel</h1>
                </div>
                <div className="w-full h-[400px] flex flex-col mt-[40px]">
                    <Link to="/admin" className="flex items-center mt-[30px] ml-[30px]"><LuClipboardList className="text-accent" />Orders</Link>
                    <Link to="/admin/products" className="flex items-center mt-[30px] ml-[30px]"><LuBoxes className="text-accent"/>Products</Link>
                    <Link to="/admin/users" className="flex items-center mt-[30px] ml-[30px]"><LuUsers className="text-accent"/>Users</Link>
                    <Link to="/admin/reviews" className="flex items-center mt-[30px] ml-[30px]"><LuMessageSquareMore className="text-accent"/>Reviews</Link>
                </div>
            </div>


            <div className="w-[calc(100%-200px)] h-full bg-primary max-h-full overflow-y-auto border-[5px] border-secondary rounded-2xl ">
               <Routes>
                    <Route path="/" element={<h1>Orders</h1>}/>
                    <Route path="/products" element={<AdminProductPage/>}/>
                    <Route path="/add-products" element={<AdminAddProduct/>}/>
                    <Route path="/users" element={<h1>users</h1>}/>
                    <Route path="/reviews" element={<h1>reviews</h1>}/>

               </Routes>
            </div>
        </div>
    )
}