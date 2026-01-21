import { useState } from "react"

export default function Test(){

const [count,setcount] = useState(0)


return(

    <div className="w-full h-full bg-amber-200 flex justify-center items-center">

        <button className="w-[200px] h-[70px] bg-amber-100" 
        onClick={
            ()=>{
               setcount(count+1)
            }
        }>Increase</button>

        <h1 className="w-[150px] h-[70px] text-center text-[40px]">{count}</h1>

        <button className="w-[200px] h-[70px] bg-amber-100" 
        onClick={
            ()=>{
                setcount(count-1)
            }
        }>Decrease</button>




       
    </div>
)



}