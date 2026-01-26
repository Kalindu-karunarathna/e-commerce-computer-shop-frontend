import { Link, Route, Routes } from 'react-router-dom'


export default function AdminPage(){
    return(
        <div className="w-full h-full flex max-h-full bg-secondary">


            <div className="w-[300px] h-full bg-secondary">
                <div className="w-full h-[100px] flex items-center ">
                    <img src="/logo.png" alt="logo" className="h-full" />
                    <h1 className="text-3xl">Admin Pannel</h1>
                </div>
                <div className="w-full h-[400px] flex flex-col">
                    <Link to="/admin">Orders</Link>
                    <Link to="/admin/products">Products</Link>
                    <Link to="/admin/users">Users</Link>
                    <Link to="/admin/reviews">Reviews</Link>
                </div>
            </div>


            <div className="w-[calc(100%-300px)] h-full bg-primary max-h-full overflow-y-auto border-[5px] border-secondary rounded-2xl ">
               <Routes>
                    <Route path="/" element={<h1>Orders</h1>}/>
                    <Route path="/products" element={<h1>products</h1>}/>
                    <Route path="/users" element={<h1>users</h1>}/>
                    <Route path="/reviews" element={<h1>reviews</h1>}/>

               </Routes>
            </div>
        </div>
    )
}