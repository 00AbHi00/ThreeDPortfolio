import Link from "next/link"

export const Header =()=>
{
    return(
        <nav className="fixed z-10 flex h-15 items-center-safe w-screen justify-around  backdrop-blur-md">
           <Link className="hover:bg-red-100/10 items-center p-3 h-full" href={"/happy"}>
                Home
           </Link>         

           <Link className="hover:bg-red-100/10 items-center p-3 h-full" href={"/contact"}>
                Contact Me
           </Link>            
        </nav>
    )
}