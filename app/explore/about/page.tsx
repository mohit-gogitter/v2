"use client";
import { useState, useEffect } from "react";
import "../styles.css";
import Qualification from "./qualification";
import Experience from "./experience";
const About = () => {
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");
    const options = {
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.getAttribute("id") || "about");
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="bg-slate-900 pb-4 ">
      <div className="md:grid md:grid-cols-8">
        <div className="md:mt-32 webkit-center col-span-1">
          <div className="hidden md:inline-block fixed">
            <a className="h-12" href="" target="_blank"></a>
            <a
              className="h-12"
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
              className="h-12"
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

            <a href="" className="h-12">
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
            <a className="h-12" href="">
              <svg
                className="h-8 w-8 text-slate-500  hover:text-yellow-500 hover:scale-120"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
            <a className="h-12" href=""></a>
          </div>
        </div>
        <div className="md:col-span-7 text-justify md:mr-8">
          <div className="md:grid md:grid-cols-3 gap-4">
            <div className="hidden md:block md:col-span-1 sticky-div p-4">
              <div className="md:mt-14">
                <h1 className="text-5xl font-bold text-gray-900 relative mb-1">
                  <span className="relative z-10">&nbsp;Mohit Singh</span>
                  <span className="absolute top-0 left-0 w-72 md:w-80 h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg transform -rotate-2 -translate-y-1 translate-x-1 z-0"></span>
                  <span className="block h-1 bg-gradient-to-r from-purple-500 to-blue-400 mt-2 transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
                </h1>
                <h4 className="relative inline-block text-l font-medium text-gray-800 bg-white px-4 py-2 rounded-lg shadow-lg border-l-4 border-blue-500 transform -rotate-2">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 rounded-lg"></span>
                  <span className="relative z-10 font-semibold">
                    Full Stack Software Engineer
                  </span>
                </h4>
              </div>
              <div className="mt-10 ml-4 text-base">
                <a
                  href="#about"
                  className={`exploreLink group flex items-center text-base font-semibold transition-all duration-300 ${
                    activeSection === "about"
                      ? "text-teal-500"
                      : "text-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block w-14 h-[2px] bg-gradient-to-b from-blue-500 to-teal-400 mr-3 transform transition-all duration-300 ${
                      activeSection === "about" ? "w-20" : "group-hover:w-20"
                    }`}
                  ></span>
                  <span>ABOUT</span>
                </a>
                <a
                  href="#experience"
                  className={`exploreLink group flex items-center font-semibold transition-all duration-300 ${
                    activeSection === "experience"
                      ? "text-teal-500"
                      : "text-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block w-14 h-[2px] bg-gradient-to-b from-blue-500 to-teal-400 mr-3 transform transition-all duration-300 ${
                      activeSection === "experience"
                        ? "w-20"
                        : "group-hover:w-20"
                    }`}
                  ></span>
                  <span>EXPERIENCE</span>
                </a>
                <a
                  href="#qualification"
                  className={`exploreLink group flex items-center font-semibold transition-all duration-300 ${
                    activeSection === "qualification"
                      ? "text-teal-500"
                      : "text-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block w-14 h-[2px] bg-gradient-to-b from-blue-500 to-teal-400 mr-3 transform transition-all duration-300 ${
                      activeSection === "qualification"
                        ? "w-20"
                        : "group-hover:w-20"
                    }`}
                  ></span>
                  <span>QUALIFICATION</span>
                </a>
              </div>
            </div>
            <div className="md:col-span-2 relative w-full p-4">
              <div className="md:hidden mb-6">
                <h1 className="text-5xl font-bold text-gray-900 relative mb-1">
                  <span className="relative z-10">&nbsp;Mohit Singh</span>
                  <span className="absolute top-0 left-0 w-72 md:w-80 h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg transform -rotate-2 -translate-y-1 translate-x-1 z-0"></span>
                  <span className="block h-1 bg-gradient-to-r from-purple-500 to-blue-400 mt-2 transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
                </h1>
                <h4 className="relative inline-block text-l font-medium text-gray-800 bg-white px-4 py-2 rounded-lg shadow-lg border-l-4 border-blue-500 transform -rotate-2">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 rounded-lg"></span>
                  <span className="relative z-10 font-semibold">
                    Full Stack Software Engineer
                  </span>
                </h4>
              </div>

              <div id="about">
                <h4 className="text-xl font-bold text-white mb-4">ABOUT</h4>
                <span className="text-gray-400">
                  Back in 2014, I took my first steps into the world of coding
                  while developing a web and mobile application for pre-schools.
                  Little did I know, this would lead me down a path where I&apos;d
                  get to shape and refine my skills in software engineering and
                  web development.
                  <br />
                  <br /> Fast forward to today, and I&apos;ve had the privilege of
                  leading software projects across various sectors—building
                  innovative solutions for an advertising agency, a start-up, a
                  global corporation, and even a digital product studio.
                  Currently, I&apos;m focused on creating accessible and impactful
                  user interfaces at CeX Webuy Entertainment, where I lead a
                  talented team of software engineers. I thrive in the
                  intersection of design and engineering, ensuring that the
                  solutions I build are not only robust under the hood but also
                  deliver a seamless user experience. Outside of work, I&apos;ve
                  contributed to tech by developing a Quality of Service Tool
                  and even ventured into the world of IoT with a Smart Home
                  project. <br />
                  <br />
                  When I&apos;m not coding, you might find me rock climbing, diving
                  into a good book, spending time with my family, or tinkering
                  with new tech ideas. My journey in tech is all about
                  continuous learning and pushing the boundaries of what&apos;s
                  possible—one project at a time.
                </span>
              </div>
              <div id="experience" className="mt-10">
                <h4 className=" text-xl font-bold text-white mb-4">
                  EXPERIENCE
                </h4>
                <Experience />
              </div>
              <div id="qualification">
                <h4 className=" text-xl font-bold text-white mb-4">
                  QUALIFICATION
                </h4>
                <Qualification />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
