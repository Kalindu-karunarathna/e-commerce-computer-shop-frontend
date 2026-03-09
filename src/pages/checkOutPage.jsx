import { useEffect, useState } from "react";

import { FiTrash2 } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function CheckoutPage(){
    const location = useLocation();
    const navigate = useNavigate();

    const [cart,setCart] = useState(location.state);

    useEffect(()=>{
    if(location.state==null){
        navigate("/products");
    }
    },[location.state,navigate]);

    
    const getTotal = ()=>{
        return cart.reduce((total,item)=>{
            return total + item.price * item.quantity;
        },0);
    } 

    return(
        <div className="w-full min-h-screen bg-primary p-6 lg:p-12">

            <h1 className="text-3xl font-semibold mb-8 text-gray-800">
                Your Products
            </h1>

            <div className="grid lg:grid-cols-3 gap-8">

                {/* Cart Items */}
                <div className="lg:col-span-2 flex flex-col gap-4">

                    {cart.map((item,index)=>(
                        <div key={index} className="bg-white rounded-xl shadow-md p-4 flex gap-4 items-center">

                            <img
                                src={item.image}
                                className="w-24 h-24 object-cover rounded-lg"
                            />

                            <div className="flex-1">

                                <h2 className="font-semibold text-gray-800">
                                    {item.name}
                                </h2>

                                <p className="text-gray-500 text-sm">
                                    LKR {item.price.toFixed(2)}
                                </p>

                                {/* Quantity Controls */}
                                <div className="flex items-center gap-3 mt-2">

                                    <button
                                    onClick={()=>{
                                        const copiedCart = [...cart];
                                        copiedCart[index].quantity-=1;
                                        if(copiedCart[index].quantity<1){
                                            copiedCart.splice(index,1);
                                        }
                                        setCart(copiedCart)
                                    }}
                                    className="w-8 h-8 bg-gray-100 rounded hover:bg-gray-200">
                                        -
                                    </button>

                                    <span className="font-medium">
                                        {item.quantity}
                                    </span>

                                    <button
                                    onClick={()=>{
                                        const copiedCart = [...cart];
                                        copiedCart[index].quantity+=1;
                                        setCart(copiedCart)
                                    }}
                                    className="w-8 h-8 bg-gray-100 rounded hover:bg-gray-200">
                                        +
                                    </button>

                                </div>

                            </div>

                            {/* Price */}
                            <div className="text-right">
                                <p className="font-semibold text-gray-800">
                                    LKR {(item.price*item.quantity).toFixed(2)}
                                </p>

                                
                            </div>

                        </div>
                    ))}

                </div>

                {/* Order Summary */}
                <div className="bg-white rounded-xl shadow-md p-6 h-fit">

                    <h2 className="text-xl font-semibold mb-4">
                        Order Summary
                    </h2>

                    <div className="flex justify-between text-gray-600 mb-2">
                        <span>Items</span>
                        <span>{cart.length}</span>
                    </div>

                    <div className="flex justify-between text-gray-600 mb-4">
                        <span>Total</span>
                        <span>LKR {getTotal().toFixed(2)}</span>
                    </div>

                    <button 
                   
                    className="w-full flex justify-center items-center bg-purple-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-purple-700 hover:shadow-lg transition-all duration-200 cursor-pointer"
                >
                       Order Now
                    </button>

                </div>

            </div>

        </div>
    )
}