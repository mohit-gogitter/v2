"use client";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo-no-background.png";
const Header = () => {
  return (
    <div>
      <Head>
        <Link rel="head-logo" href="/static/logo-no-background.png"></Link>
      </Head>
      <header className="py-6">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Image src={logo} alt="Mohit Singh Logo" width={40} height={40} />
          <nav>
            <ul className="flex space-x-8">
              {/* <li>
                <Link href="/about" className="hover:text-cyan-300 text-lg">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="./components/experience"
                  className="hover:text-cyan-300 text-lg"
                >
                  Experience
                </Link>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-300 text-lg">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-300 text-lg">
                  Contact
                </a>
              </li> */}
              <li>
                <a
                  className="resumeBtn text-l"
                  href="https://drive.google.com/file/d/1c6FX13IKiF6xaQidbB5ZGuGzIbrNVETB/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Resume</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};
export default Header;
