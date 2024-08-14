"use client";
const Projects = () => {
return (
    <div>
         {/* Projects Section */}
         <section
          id="projects"
          className="py-24 bg-secondary rounded-lg shadow-lg"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Project One</h3>
              <p className="text-gray-400 mb-4">
                Description of project one. This project involves creating an
                efficient backend solution for a complex problem.
              </p>
              <a href="#" className="text-accent hover:underline">
                Learn More
              </a>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Project Two</h3>
              <p className="text-gray-400 mb-4">
                Description of project two. This project showcases my skills in
                API development and integration.
              </p>
              <a href="#" className="text-accent hover:underline">
                Learn More
              </a>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Project Three</h3>
              <p className="text-gray-400 mb-4">
                Description of project three. This project demonstrates my
                ability to work with cloud technologies and microservices.
              </p>
              <a href="#" className="text-accent hover:underline">
                Learn More
              </a>
            </div>
          </div>
        </section>
    </div>
);
}

export default Projects;