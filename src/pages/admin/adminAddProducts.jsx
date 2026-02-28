import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function AdminAddProduct(){
    const [ productId,setproductId] = useState("");
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
    const navigate = useNavigate();

    async function addProduct(){

        const token = localStorage.getItem("token");
        if(token==null){
            toast.error("you must be log in as admin to add products!");
            navigate("/login");
            return
        }

        if(productId==""||name==""||description==""||price==""||category==""||brand==""||model==""){
            toast.error("plese fill all required fields!")
            return
        }

        try{
            const altNamesInArray = altNames.split(",")
            const imagesInArray = images.split(",")

            await axios.post(import.meta.env.VITE_BACKEND_URL+"/products/",{
                productId : productId,
                name : name,
                altNames : altNamesInArray,
                description : description,
                price : price,
                labelPrice : labelPrice,
                images : imagesInArray,
                category : category,
                brand : brand,
                model : model,
                stock : stock,
                isAvailable : isAvailable
            },{
                headers : {
                    Authorization : "Bearer "+token
                }
            })
            toast.success("product added successfully!");
            navigate("/admin/products");

        }catch(err){
            console.log("error in adding product : ")
            console.log(err);
            toast.error("error in adding product. please try again!")
        }
    }


    return(
        <div className="w-full min-h-screen flex justify-center items-center">
          
            <form className="bg-white p-6 sm:p-10 mt-8 mb-8 rounded-lg w-[68%] shadow-md">
                <div className="max-w-5xl mx-auto space-y-8">

                    <h2 className="text-2xl font-bold text-gray-800 mb-18">
                    Add New Product
                    </h2>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

                        {/* Product ID */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                            Product ID
                            </label>
                            <input
                            type="text"
                            value={productId}
                            onChange={(e)=>{setproductId(e.target.value)}}
                            className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2 
                            focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                            outline-none transition"
                            />
                        </div>

                        {/* Product Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                            Product Name
                            </label>
                            <input
                            type="text"
                            value={name}
                            onChange={(e)=>{setname(e.target.value)}}
                            className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2 
                            focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                            outline-none transition"
                            />
                        </div>

                        {/* Alternative Names */}
                        <div className="sm:col-span-2">
                            <label className="block text-sm font-medium text-gray-700">
                            Alternative Names
                            </label>
                            <input
                            type="text"
                            placeholder="Separate with commas"
                            value={altNames}
                            onChange={(e)=>{setaltNames(e.target.value)}}
                            className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2 
                            focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                            outline-none transition"
                            />
                        </div>

                        {/* Description */}
                        <div className="sm:col-span-2">
                            <label className="block text-sm font-medium text-gray-700">
                            Description
                            </label>
                            <textarea
                            rows="4"
                            value={description}
                            onChange={(e)=>{setdescription(e.target.value)}}
                            className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2 
                            focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                            outline-none transition"
                            />
                        </div>

                        {/* Price */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                            Price
                            </label>
                            <input
                            type="number"
                            value={price}
                            onChange={(e)=>{setprice(e.target.value)}}
                            className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2 
                            focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                            outline-none transition"
                            />
                        </div>

                        {/* Labelled Price */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                            Labelled Price
                            </label>
                            <input
                            type="number"
                            value={labelPrice}
                            onChange={(e)=>{setlabelPrice(e.target.value)}}
                            className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2 
                            focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                            outline-none transition"
                            />
                        </div>

                        {/* Image Links */}
                        <div className="sm:col-span-2">
                            <label className="block text-sm font-medium text-gray-700">
                            Image Links
                            </label>
                            <input
                            type="text"
                            value={images}
                            onChange={(e)=>{setimages(e.target.value)}}
                            placeholder="https://example.com/image1.jpg"
                            className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2 
                            focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                            outline-none transition"
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                            Category
                            </label>
                            <select
                            value={category}
                            onChange={(e)=>{setcategory(e.target.value)}}
                            className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2 
                            focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                            outline-none transition"
                            >
                            <option value={"CPU"}>CPU</option>
                            <option value={"Graphics Cards"}>Graphics Cards</option>
                            <option value={"Motherboards"}>Motherboards</option>
                            <option value={"Power Supplies"}>Power Supplies</option>
                            <option value={"RAM"}>RAM</option>
                            <option value={"Storage Devices"}>Storage Devices</option>
                            <option value={"Cooling Solutions"}>Cooling Solutions</option>
                            <option value={"Computer Cases"}>Computer Cases</option>
                            <option value={"Mouse and Keyboards"}>Mouse and Keyboards</option>
                            <option value={"Accessories"}>Accessories</option>
                            <option value={"Monitors"}>Monitors</option>
                            <option value={"Computers"}>Computers</option>
                            <option value={"Laptops"}>Laptops</option>
                            <option value={"Cables"}>Cables</option>
                            <option value={"Others"}>Others</option>
                            </select>
                        </div>

                        {/* Brand */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                            Brand
                            </label>
                            <input
                            type="text"
                            value={brand}
                            onChange={(e)=>{setbrand(e.target.value)}}
                            className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2 
                            focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                            outline-none transition"
                            />
                        </div>

                        {/* Model */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                            Model
                            </label>
                            <input
                            type="text"
                            value={model}
                            onChange={(e)=>{setmodel(e.target.value)}}
                            className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2 
                            focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                            outline-none transition"
                            />
                        </div>

                        {/* Stock */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                            Stock
                            </label>
                            <input
                            type="number"
                            value={stock}
                            onChange={(e)=>{setstock(e.target.value)}}
                            className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2 
                            focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                            outline-none transition"
                            />
                        </div>

                        {/* Availability */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                            Availability
                            </label>
                            <select
                            value={isAvailable}
                            onChange={(e)=>{setisAvailable(e.target.value)}}
                            className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2 
                            focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                            outline-none transition"
                            >
                            <option value="true">True</option>
                            <option value="false">False</option>
                            </select>
                        </div>

                    </div>

                    {/* Save Button */}
                    <div className="flex justify-end gap-4 pt-6">
                        <Link to="/admin/products"
                              className=" bg-red-600 text-white font-semibold px-6 py-2 rounded-xl shadow-md hover:bg-red-700 transition duration-200 flex items-center justify-center">
                                Cancel
                        </Link>
                        <button
                            type="submit"
                            className="rounded-xl bg-indigo-600 px-8 py-3 text-white font-semibold 
                            shadow-md hover:bg-indigo-700 hover:shadow-lg 
                            transition duration-200">
                            Save Product
                        </button>
                    </div>

                </div>
            </form>
 
        </div>
    )
}