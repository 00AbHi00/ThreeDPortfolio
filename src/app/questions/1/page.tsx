'use client'
import  { useState,useEffect, useRef } from "react";
import useDebounce from "./useDebounce";
export default function FunctionName() {
    const InputRef=useRef<HTMLInputElement>(null)
    const [input, setInput]= useState('');
    
    
    const debouncedInp=useDebounce(InputRef.current?.value||'',1000)
    // Using use State rerenders the component, so we can use ref to avoiod doing this

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
          <div>
            Input
            {input}
          </div>
          <div>
            Debounced Input
            {debouncedInp}
          </div>
         
        </span>
    </div>
  );
}