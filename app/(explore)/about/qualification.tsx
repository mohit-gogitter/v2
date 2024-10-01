"use client";
import React from "react";

const Qualification = () => {
  const educationDetails = [
    {
      degree: "Master of Technology (Software Systems)",
      specialization: "Specialization in Cloud Computing",
      cgpa: "CGPA: 9.04",
      institution: "BITS Pilani",
      location: "Pilani, India",
      period: "07/2021- 06/2023",
    },
    {
      degree: "Post Grad Diploma (Advanced Computing)",
      institution: "CDAC",
      location: "Bangalore, India",
      period: "02/2015- 08/2015",
    },
    {
      degree: "Bachelor of Engineering (Computer Science)",
      institution: "Pune University",
      location: "Pune, India",
      period: "07/2010- 05/2014",
    },
    {
      degree: "H.S.C (12th)",
      institution: "Mumbai University",
      location: "Mumbai, India",
      period: "06/2009- 04/2010",
    },
    {
      degree: "S.S.C (10th)",
      institution: "Mumbai University",
      location: "Mumbai, India",
      period: "06/2007- 04/2008",
    },
  ];

  return (
    <div className="text-sm md:text-base overflow-x-auto p-[2px] bg-stone-300 shadow-md">
      <div className="min-w-full divide-y divide-stone-700">
        <table className=" bg-neutral-900 text-white">
          <thead>
            <tr className="border-b bg-slate-900 border-stone-300">
              <th className="p-4 text-left">Period</th>
              <th className="p-4 text-left">Degree</th>
              <th className="p-4 text-left">Institution</th>
              <th className="p-4 text-left">Location</th>
              <th className="p-4 text-left">Specialization / CGPA</th>
            </tr>
          </thead>
          <tbody className="text-zinc-300">
            {educationDetails.map((edu, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="p-3">{edu.period}</td>
                <td className="p-3">{edu.degree}</td>
                <td className="p-3">{edu.institution}</td>
                <td className="p-3">{edu.location}</td>
                <td className="p-3">
                  {edu.specialization ? (
                    <>
                      <div>{edu.specialization}</div>
                      <div className="font-bold text-green-600">{edu.cgpa}</div>
                    </>
                  ) : (
                    <>{edu.cgpa || ""}</>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Qualification;
