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
          <a href="/">
            <Image src={logo} alt="Mohit Singh Logo" width={40} height={40} />
          </a>
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
                {/* <a
                  className="resumeBtn text-l"
                  href="https://drive.google.com/file/d/1c6FX13IKiF6xaQidbB5ZGuGzIbrNVETB/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Resume</span>
                </a> */}

                <button className="resumeBtn text-white py-2 px-4 rounded inline-flex items-center">
                  <a
                    href="https://drive.google.com/file/d/1c6FX13IKiF6xaQidbB5ZGuGzIbrNVETB/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="fill-current w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                    </svg>
                    <span>Resume</span>
                  </a>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};
export default Header;
