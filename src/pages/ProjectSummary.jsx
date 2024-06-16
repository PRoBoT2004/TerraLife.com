// src/pages/ProjectSummary.jsx
import React from 'react';

const ProjectSummary = () => {
  return (
    <section id="project-summary" className="min-h-screen items-center content-center justify-center bg-darkGreen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl text-white font-bold text-center mb-8">Project Summary</h1>
        <div className="max-w-3xl mx-auto">
          <div className="bg-silvi rounded-lg shadow-lg p-6 mb-3">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">As we conclude our journey...</h2>
            <p className="text-lg md:text-xl mb-4">
              As we conclude our journey, we reflect on the transformative potential of TerraLife in reshaping afforestation efforts. TerraLife is more than a platform; it is a movement towards a sustainable future.
            </p>
          </div>
          <div className="bg-silvi rounded-lg shadow-lg p-6 mb-3">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Embrace the vision of a greener future...</h2>
            <p className="text-lg md:text-xl mb-4">
              Embrace the vision of a greener future through collaborative tree planting and sustainable community engagement. Together, we can turn barren lands into thriving forests, fostering biodiversity and combating climate change.
            </p>
          </div>
          <div className="bg-silvi rounded-lg shadow-lg p-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Join us in this mission...</h2>
            <p className="text-lg md:text-xl mb-4">
              Join us in this mission. Let's create a legacy of lush green landscapes for generations to come.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSummary;
