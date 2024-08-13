'use client';
import '../styles.css';
import Image from "next/image";
import MyLogo from "../../../public/logo-no-background.png";
import MyPic from "../../../public/images/my_pic_4.jpg";
import Link from "next/link";
import Footer from "../../components/footer";
const Experience = () => {
  return ( 
    <div className="relative">
        <div className="flex flex-col h-screen justify-between text-foreground">
      <main className="">
        {/* Hero Section */}
        <div className="grid grid-cols-12 divide-x-2 border-0">
          <div className="webkit-center border-none col-span-7">
            <section className="text-center py-14 pl-4">
              <div className="display-inline-block">
                <h2 className="text-5xl font-bold mb-4 float-left">
                  Hey, I&apos;m&nbsp;
                </h2>
                <Image
                  className="float-left"
                  src={MyLogo}
                  alt="Mohit"
                  width={50}
                  height={50}
                ></Image>
                <h2 className=" float-left text-5xl font-bold mb-4">ohit,</h2>
                <br />
              </div>

              <div className="webkit-center mt-6 grid grid-cols-8">
                <a></a>
                <a></a>
                <a
                  className=""
                  href="https://github.com/mohit-gogitter"
                  target="_blank"
                >
                  <svg
                    className="h-8 w-8 text-slate-500 hover:text-white hover:scale-120"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/mohit-singh-15a82288/"
                  target="_blank"
                >
                  <svg
                    className="h-8 w-8 text-slate-500 hover:text-blue-500 hover:scale-120"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
                    <rect x="2" y="9" width="4" height="12" />{" "}
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a href="">
                  <svg
                    className="h-8 w-8 text-slate-500  hover:text-red-500 hover:scale-120"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
                <a href="">
                  <svg
                    className="h-8 w-8 text-slate-500  hover:text-yellow-500 hover:scale-120"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </a>
                <a></a>
                <a></a>
              </div>
              <div className="flex justify-center space-x-4 pt-8">
                <Link href="/" className="rgb-button text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110">
                  Explore{" "}
                  <svg
                    className=" inline-block h-6 w-6 text-white-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <line x1="5" y1="12" x2="19" y2="12" />{" "}
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </section>
          </div>

        </div>
      </main>
      <Footer></Footer>
    </div>


      <div className="h-64 border-l-4 border-gray-800 absolute left-1/2 transform -translate-x-1/2"></div>

      <div className="relative top-4">
        <div className="diamond"></div>
      </div>
      <div className="relative top-16">
        <div className="diamond"></div>
      </div>
      <div className="relative top-28">
        <div className="diamond"></div>
      </div>
      <div className="relative top-40">
        <div className="diamond"></div>
      </div>
    </div>
  );
};

export default Experience;
