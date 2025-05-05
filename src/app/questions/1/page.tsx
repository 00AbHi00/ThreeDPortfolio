'use client'
import  { useState,useEffect, useRef } from "react";
import useDebounce from "./useDebounce";
export default function FunctionName() {
    const InputRef=useRef<HTMLInputElement>(null)
    const [input, setInput]= useState('');
    const debouncedInp=useDebounce(input,1000)
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>
    {
      if(InputRef.current)
      {
        setInput(InputRef.current?.value)
      }
    }

    return (
    <div className="grid h-screen place-items-center ">
        <div>
          <input 
            ref={InputRef}
            onChange={handleChange}
            className="p-3 text-2xl outline focus:outline-red-900"
            type="search" name="" id="" />              
        </div>
        <span className="">
          {input}
         De: {debouncedInp}
        </span>
    </div>
  );
}