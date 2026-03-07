import axios from "axios";
import { useEffect, useState } from "react"
import Loader from "../components/loader";
import ProductCard from "../components/product-card";


export default function ProductPage(){

    const [products,setproducts]=useState([]);
    const [loaded,setloaded]=useState(false);

    useEffect(
        ()=>{
            if(!loaded){
                 axios.get(import.meta.env.VITE_BACKEND_URL+"/products")
                .then((response)=>{
                 setproducts(response.data);
                 setloaded(true);
            });
            }
        },[]
    )

    return(
        <div className="w-full min-h-[calc(100vh-100px)] p-4 sm:p-6 lg:p-8">
  {
    !loaded ? (
      <Loader />
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((item) => (
          <ProductCard key={item.productId} product={item} />
        ))}
      </div>
    )
  }
</div>
    )
}