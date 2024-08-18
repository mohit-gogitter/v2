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
  ];

  return (
    <div className="overflow-x-auto p-[2px] bg-indigo-300 shadow-md">
      <div className="min-w-full divide-y divide-gray-700">
        <table className=" bg-gray-900 text-white">
          <thead>
            <tr className="border-b bg-gray-800 border-indigo-300">
              <th className="p-4 text-left">Period</th>
              <th className="p-4 text-left">Degree</th>
              <th className="p-4 text-left">Institution</th>
              <th className="p-4 text-left">Location</th>
              <th className="p-4 text-left">Specialization / CGPA</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            {educationDetails.map((edu, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="p-4">{edu.period}</td>
                <td className="p-4">{edu.degree}</td>
                <td className="p-4">{edu.institution}</td>
                <td className="p-4">{edu.location}</td>
                <td className="p-4">
                  {edu.specialization ? (
                    <>
                      <div>{edu.specialization}</div>
                      <div>{edu.cgpa}</div>
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
