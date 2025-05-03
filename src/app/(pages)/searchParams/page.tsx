"use client";

import { useGSAP } from "@gsap/react";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useRef } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
export default function SearchBar() {
  useGSAP(()=>{
    const t1=gsap.timeline()
    t1.fromTo(div1.current,
        {
            x:10,
            duration:1,
            backgroundColor:searchParams.get('color')||'black'
        },
        {
            x:200
        }
    )
  },[])
  const div1=useRef(null)
  const searchParams = useSearchParams();
  const router = useRouter()
  const pathname = usePathname()

  const search = searchParams.get("search");

  const search2 = searchParams.get("name");
  
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )
  // URL -> `/dashboard?search=my-project`
  // `search` -> 'my-project'
  return (
    <div ref={div1} className="absolute top-1/2  ">
      Search: {search2} {search}
        <select onChange={(e)=>{
            router.push(pathname + '?' + createQueryString('color', e.currentTarget.value))
        }} defaultValue={"yellow"}>
            
            <option value="red">
                red
            </option>

            <option value="yellow">
                yellow
            </option>
        </select>
    </div>
  );
}
