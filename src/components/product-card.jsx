import { useState } from "react"

export default function Test(){

const [count,setcount] = useState(0)
const [onOff,onOffFunc] = useState("🌞")


return(
<div>
    <div className="w-[500px] h-[500px] bg-amber-200 flex justify-center items-center">

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

    <div className="w-[500px] h-[500px] bg-amber-50 shadow-lg flex flex-col justify-center">
        <span className="h-[50px] text-3xl text-bold w-full text-center">
            {onOff}
        </span>

        <div className="w-full h-[70px] flex justify-center">
            <button className="w-[150px] h-full bg-amber-200" onClick={
                ()=>{
                    onOffFunc("🌞")
                }
            }>ON</button>

            <button className="w-[150px] h-full bg-amber-400" onClick={
                ()=>{
                    onOffFunc("🌑")
                }
            }>OFF</button>
        </div>    

    </div>

</div>
        
)



}