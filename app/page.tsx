// app/page.tsx
"use client";
import Image from "next/image";
import "./explore/styles.css";
import MyLogo from "../public/logo-no-background.png";
import MyPic from "../public/images/my_pic_4.jpg";
import Link from "next/link";
const Home = () => {
  return (
    <div className="flex flex-col justify-between text-foreground">
      {/* <Header></Header> */}
      <main>
        {/* Hero Section */}
        <div className="md:grid md:grid-cols-12 md:divide-x-2 flex flex-col-reverse divide-y divide-y-reverse border-0">
          <div className="webkit-center border-none col-span-7">
            <section className="text-center py-8">
              <div className="flex justify-center">
                <h2 className="text-4xl float-left md:text-5xl font-bold mb-4">
                  Hey, I&apos;m&nbsp;
                </h2>
                <Image
                  className="float-left md:hidden mb-4"
                  height={40}
                  width={40}
                  src={MyLogo}
                  alt="Mohit"
                  style={{ objectFit: "contain" }}
                ></Image>
                <Image
                  className="float-left hidden md:block mb-4"
                  height={50}
                  width={50}
                  src={MyLogo}
                  alt="Mohit"
                  style={{ objectFit: "contain" }}
                ></Image>
                <h2 className=" float-left text-4xl md:text-5xl font-bold mb-4">
                  ohit,
                </h2>
                <br />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Software Engineer
              </h2>
              <p className="text-xl mb-2 text-gray-400 text-justify px-8">
                Hi, there! I am{" "}
                <b>
                  <span className="text-emerald-500">M</span>ohit{" "}
                  <span className="text-emerald-500">S</span>ingh
                </b>
                , a forward-thinking leader in web development🌐, carving paths through the dynamic world of software engineering.
                <br /><br/>
                I create dynamic, responsive, and aesthetically pleasing digital solutions that connect with users. With over a decade of experience at the helm of complex projects, I’m driven by a passion for discovering new possibilities and pushing the limits of what technology can achieve.
                <br/>
                Let’s code the future, one full-stack at a time. 💻
              </p>

              <div className="webkit-center mt-6 grid grid-cols-6">
                <a href="" target="_blank"></a>
                <a href="https://github.com/mohit-gogitter" target="_blank">
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
              </div>
              <div className="flex justify-center space-x-4 mt-6">
                <Link
                  href="../explore/about"
                  className="rgb-button text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110"
                >
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
          <div className="webkit-center border-none float-left col-span-5">
            <div className="md:py-14">
              <Image
                className="w-80 h-80 inline-flex border-2 rounded-full glowing-border mx-auto object-cover left-0"
                src={MyPic}
                alt="My Picture"
                height={0}
                width={0}
                style={{ width: "50%", height: "40%" }}
              />
            </div>
            {/* <div className="hidden md:block text-right text-xs text-gray-500 bottom-0 right-0 absolute mb-16 italic">
              <p className="pr-4">
                Loosely designed in <b>Figma</b> and coded in{" "}
                <b>Visual Studio Code</b> by yours truly.
              </p>
              <p className="pr-4">
                Built with <b>Next.js</b> and <b>Tailwind CSS</b>, deployed with{" "}
                <b>Vercel</b>.
              </p>
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
