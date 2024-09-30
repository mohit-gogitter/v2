"use client";
import React from "react";

const Experience = () => {
    const experiences = [
        {
          role: "Lead Software Engineer",
          company: "CeX Webuy Entertainment Pvt Ltd",
          location: "Mumbai, India",
          period: "02/2022 – Present",
          responsibilities: [
            "Led a team of 8+ software engineers in design and development of multiple enterprise-level microservice applications of CeX Group, driving $1.8 billion of revenue every year using the latest technologies of C#, .NET, MSSQL, MySQL, VueJS, ASP.NET MVC, REST API.",
            "Spearheaded the migration of a web application with 32 modules to .NET Core under Tech Modernization eliminating the technical debt of legacy system altogether within 14 weeks of implementation.",
            "Designed E2E system and led development of accounting project using which store staff were able to fulfill Ad Hoc Payment requests of the customer.",
            "Stream-Lead of cross-functional project to build a Refunds and Invoice Generation system using Abstract Factory Design Pattern for Portugal region impacting 2M+ customers for their Tax reporting purpose.",
            "Single-handedly architected scalable and maintainable solution to completely automate stock transfer from warehouse to 600+ stores worldwide.",
            "Enriched system by building several custom user controls standardizing UI components using vanilla JavaScript, Bootstrap, and VueJS across applications.",
            "Setting up SonarQube Business rules, pull requests, code reviews, unit/integration/e2e testing using Mocks library and NUnit.",
          ],
        },
        {
          role: "Consultant",
          company: "Deloitte Consulting USI Pvt Ltd",
          location: "Bangalore & Mumbai, India",
          period: "09/2015 - 01/2022",
          responsibilities: [
            "Implemented new features for multiple public sector projects under healthcare domain using C#, VB, SQL Server.",
            "Collaborated with Product managers, stakeholders to define requirements, streamline development process, prioritization, implementing agile methodologies reducing time-to-market by 70%.",
            "Designed Predictive Analysis algorithm for a potential disorder of a newborn used in screening of 400K+ babies in California every year.",
            "Cross-platform app using Xamarin; Automation testing framework using Selenium & .NET; XML-based Rule Engine to calculate charges.",
            "Key Contributor for migration of legacy system to low-code/no-code Microsoft Power Platform using PowerApps and Dataverse.",
          ],
        },
        {
          role: "Software Engineer",
          company: "AppealSoft Pvt Ltd",
          location: "Pune, India",
          period: "07/2014 - 11/2014",
          responsibilities: [
            "KidKonnect: Developed Web and Mobile application for Pre-school owner and parents.",
          ],
        },
      ];

  return (
    <div className="text-lg">
      <section className="mx-auto">
                  <div>
                    {experiences.map((exp, index) => (
                      <div key={index} className="mb-10 rounded-lg shadow-md">
                        <h3 className="text-xl text-cyan-300">{exp.role}</h3>
                        <p className="italic text-white">
                          {exp.company} - {exp.location}
                        </p>
                        <p className=" mb-2">{exp.period}</p>
                        <ul className="triangle-bullet list-none space-y-1 text-zinc-400">
                          {exp.responsibilities.map((responsibility, i) => (
                            <li key={i}>{responsibility}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>
    </div>
  );
};

export default Experience;
