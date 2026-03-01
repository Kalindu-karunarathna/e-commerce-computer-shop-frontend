import {Link} from "react-router-dom"
import { HiPlus } from "react-icons/hi";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function AdminProductPage(){

    const[products,setproducts]=useState([]);
    useEffect(()=>{
        axios.get(import.meta.env.VITE_BACKEND_URL+"/products")
        .then((response)=>{
            setproducts(response.data);
        });
    },[]);

    
    return(
        <div className="w-full h-full flex justify-center items-center  relative">


           
    <div className="p-6 bg-primary min-h-screen">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-300 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-6">
            Product Inventory
          </h2>
           <Link to="/admin/add-products" className="rounded-full border-4 border-accent text-accent duration-300
                 hover:bg-accent hover:text-white cursor-pointer text-4xl">
                <HiPlus />
            </Link>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            
            <thead className="bg-gray-50 text-gray-600 uppercase text-xs tracking-wider">
              <tr>
                <th className="px-6 py-4">Image</th>
                <th className="px-6 py-4">Product Id</th>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Labelled Price</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Brand</th>
                <th className="px-6 py-4">Model</th>
                <th className="px-6 py-4">Stock</th>
                <th className="px-6 py-4">Availability</th>
                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-300">
                {
                    products.map(
                        (item,index)=>{
                            return(
                                <tr key={index} className="hover:bg-gray-50 transition">
                                    <td className="px-6 py-4"><img src={item.images[0]} className="w-7.5 h-7.5 "/></td>
                                    <td className="px-6 py-4">{item.productId}</td>
                                    <td className="px-6 py-4">{item.name}</td>
                                    <td className="px-6 py-4">{item.price}</td>
                                    <td className="px-6 py-4">{item.labelPrice}</td>
                                    <td className="px-6 py-4">{item.category}</td>
                                    <td className="px-6 py-4">{item.brand}</td>
                                    <td className="px-6 py-4">{item.model}</td>
                                    <td className="px-6 py-4">{item.stock}</td>
                                    <td className="px-6 py-4">{item.isAvailable}</td>
                                    <td className="px-6 py-4"><button className="px-3 py-1 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 active:bg-red-800 transition"
                                    onClick={
                                        () => {
                                            const token = localStorage.getItem("token");
                                             axios.delete(import.meta.env.VITE_BACKEND_URL+"/products/"+item.productId,{
                                                headers:{Authorization : "Bearer "+token}
                                             }).then(()=>{toast.success("product deleted succesfully!")}
                                             ).catch((err) => {toast.error("Failed to delete product");
                                                                console.log(err);
                                             }
                                            );
                                        }}>Delete</button>
                                    </td>
                                </tr>
                            );
                        }
                    )
                }
              
              

            </tbody>
          </table>
        </div>
      </div>
    </div>
  




           
           
        </div>
    )
}