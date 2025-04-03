import Link from "next/link";

export const Header = () => {
  return (
    <>

      <nav
        style={{ boxShadow: "-20px -20px 30px white" }}
        className="fixed z-10 flex h-15 items-center-safe w-screen justify-around  backdrop-blur-md"
      >
        <Link
          className="hover:bg-red-100/10 items-center p-3 h-full"
          href={"/happy"}
        >
          Home
        </Link>

        <Link
          className="hover:bg-red-100/10 items-center p-3 h-full"
          href={"/contact"}
        >
          Contact Me
        </Link>
      </nav>
      <a href="#main-content" tabIndex={99} 
        className="z-10 fixed opacity-30 right-5 p-2  bottom-5 focus:opacity-100 cursor-pointer">
            Skip to main Content
       </a>
    </>
  );
};
