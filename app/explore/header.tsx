"use client";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import logo from "../../public/logo-no-background.png";
import Navbar from "./navbar"; 
import ResumeBtn from "./ResumeBtn";
const Header = () => {
  const currentPath = usePathname();
  const showNavbar = currentPath === "/" ? false:true;
  return (
    <div>
      <Head >
        <Link rel="head-logo" href="/static/logo-no-background.png"></Link>
      </Head>
      <header className="py-6 sticky top-0 border-b-slate-500 border-b">
        <div className="mx-auto px-6 flex justify-between items-center">
          <a href="/">
            <Image src={logo} alt="Mohit Singh Logo" width={40} height={40} />
          </a>
          {showNavbar && <Navbar/>}
          <div className="hidden md:block"><ResumeBtn/></div>
        </div>
        
      </header>
    </div>
  );
};
export default Header;
