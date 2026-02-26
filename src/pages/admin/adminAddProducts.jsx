import { useState } from "react";

export default function AdminAddProduct(){
    const [ productId,setproductID] = useState("");
    const [name,setname] = useState("");
    const [altNames,setaltNames] = useState("")
    const [description,setdescription] = useState("")
    const [price,setprice]=useState("0")
    const [labelPrice,setlabelPrice] = useState("0")
    const [images,setimages] = useState("")
    const [category,setcategory]=useState("")
    const [brand,setbrand]=useState("")
    const [model,setmodel]=useState("")
    const [stock,setstock]=useState("0")
    const [isAvailable,setisAvailable]=useState("false")


    return(
        <div className="w-full h-full flex justify-center items-center text-4xl">
            add product
        </div>
    )
}