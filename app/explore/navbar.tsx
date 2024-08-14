"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import ResumeBtn from "./ResumeBtn";
const Navbar = () => {
  const [isBarsOpen, setIsBarsOpen] = useState(false);
  function getNavBarClasses() {
    let navBarClasses = [];

    if (isBarsOpen) {
      navBarClasses = [
        "flex",
        "absolute",
        "top-1",
        "w-full",
        "pt-16",
        "pb-8",
        "left-0",
        "gap-5",
        "flex-col",
        "bg-slate-700 md:bg-inherit"
      ];
    }
    else{
        navBarClasses = ["hidden", "md:flex", "space-x-8"]
    }
    return navBarClasses.join(" ");
  }
  return (
    <div className=" bg-slate-700 md:bg-inherit">
      <div>
        <nav>
          <ul className={getNavBarClasses()}>
            <li>
              <Link href="./about" className="hover:text-cyan-300 text-lg">
                01 &nbsp;<span className="text-cyan-300">About</span>
              </Link>
            </li>
            <li>
              <Link
                href="./experience"
                className="hover:text-cyan-300 text-lg"
              >
                02 &nbsp;<span className="text-cyan-300">Experience</span>
              </Link>
            </li>
            <li>
              <a href="./projects" className="hover:text-cyan-300 text-lg">
                03 &nbsp;<span className="text-cyan-300">Projects</span>
              </a>
            </li>
            <li>
              <a href="./contact" className="hover:text-cyan-300 text-lg">
                04 &nbsp;<span className="text-cyan-300">Contact</span>
              </a>
            </li>
            <li className="block md:hidden">
              <ResumeBtn />
            </li>
          </ul>
        </nav>
      </div>
      <div className="md:hidden flex items-center">
        <button
          className="absolute right-2 top-4 p-4"
          onClick={() => {
            setIsBarsOpen(!isBarsOpen);
          }}
        >
          <FontAwesomeIcon
            className="text-2xl"
            icon={faBarsStaggered}
          ></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};
export default Navbar;
