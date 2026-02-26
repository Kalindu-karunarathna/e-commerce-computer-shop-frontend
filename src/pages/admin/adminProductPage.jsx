import {Link} from "react-router-dom"
import { HiPlus } from "react-icons/hi";

export default function AdminProductPage(){
    return(
        <div className="w-full h-full flex justify-center items-center text-4xl relative">

            <Link to="/admin/add-products" className="rounded-full border-4 border-accent text-accent duration-300
                 hover:bg-accent hover:text-white cursor-pointer absolute right-11 bottom-8">
                <HiPlus />
            </Link>
           
        </div>
    )
}