"use client";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../public/logo-no-background.png";
import Navbar from "./navbar";
import ResumeBtn from "./ResumeBtn";
const Header = () => {
  const currentPath = usePathname();
  const isLandingPage = currentPath === "/" ? true : false;
  function getBorderClasses() {
    let borderClasses = [];
    if (isLandingPage) {
      borderClasses = ["py-4", , "top-0"];
    } else {
      borderClasses = ["py-4", "top-0", "border-b-slate-500", "border-b"];
    }
    return borderClasses.join(" ");
  }
  function getResumeButtonClasses() {
    let resumeClasses = [];
    if (isLandingPage) {
      resumeClasses = [""];
    } else {
      resumeClasses = ["hidden md:block"];
    }
    return resumeClasses.join(" ");
  }
  function getHeaderClasses() {
    let headerClasses = [];
    {
      if (isLandingPage) {
        headerClasses = [""];
      } else {
        headerClasses = ["sticky-header"];
      }
    }
    return headerClasses.join(" ");
  }
  return (
    <div className={getHeaderClasses()}>
      <Head>
        <Link rel="head-logo" href="/static/logo-no-background.png"></Link>
      </Head>
      <header className={getBorderClasses()}>
        <div className="mx-auto px-6 flex justify-between items-center">
          <a href="/">
            <Image src={logo} alt="Mohit Singh Logo" width={40} height={40} />
          </a>
          {!isLandingPage && <Navbar />}
          <div className={getResumeButtonClasses()}>
            <ResumeBtn />
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
