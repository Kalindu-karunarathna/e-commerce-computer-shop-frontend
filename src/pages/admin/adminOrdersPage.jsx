import {Link} from "react-router-dom"
import { HiPlus } from "react-icons/hi";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "../../components/loader";


export default function AdminOrdersPage(){

    const[orders,setOrders]=useState([]);
    const[loaded,setloaded]=useState(false);

    useEffect(()=>{
        if(!loaded){
            axios.get(import.meta.env.VITE_BACKEND_URL+"/orders")
            .then((response)=>{
            setOrders(response.data);
            setloaded(true);
        });
        }   
    },[loaded]);

    
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
                        {loaded?<table className="w-full text-sm text-left">
                            
                            <thead className="bg-gray-50 text-gray-600 uppercase text-xs tracking-wider">
                                <tr>
                                    <th className="px-6 py-4">Order Id</th>
                                    <th className="px-6 py-4">Customer name</th>
                                    <th className="px-6 py-4">Customer email</th>
                                    <th className="px-6 py-4">Date</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4">Total Amount</th>
                                    <th className="px-6 py-4">Items</th>
                                    <th className="px-6 py-4">Action</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-300">
                                {
                                    orders.map(
                                        (order,index)=>{
                                            return(
                                                <tr key={index} className="hover:bg-gray-50 transition">
                                                    <td className="px-6 py-4">{order.orderId}</td>
                                                    <td className="px-6 py-4">{order.name}</td>
                                                    <td className="px-6 py-4">{order.email}</td>
                                                    <td className="px-6 py-4">{order.date}</td>
                                                    <td className="px-6 py-4">{order.status}</td>
                                                    <td className="px-6 py-4">LKR.{order.total.toFixed(2)}</td>
                                                    <td className="px-6 py-4">{order.items}</td>
                                                    <td className="px-6 py-4"></td>
                                                   
                                                </tr>
                                            );
                                        }
                                    )
                                }
                            
                            </tbody>
                        </table>:<Loader/>}
                    </div>
                </div>
            </div>   
        </div>
    )
}