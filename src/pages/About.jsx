// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-darkGreen text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">About TerraLife</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-center mb-8">
            Welcome to TerraLife, an innovative platform designed to empower landowners and communities to collaborate
            in large-scale tree planting initiatives.
          </p>
          <p className="text-lg md:text-xl text-center mb-8">
            Join us in our mission to reforest barren lands and create a sustainable future for generations to come.
          </p>
          <div className="bg-silvi text-black rounded-lg shadow-lg p-6 flex flex-col items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Explore the Features and Benefits:</h2>
              <ul className="list-disc pl-6">
                <li>Discover the TerraLife Platform: An innovative solution for reforesting barren lands.</li>
                <li>Empowering Landowners and Communities: Bringing together stakeholders for a common environmental cause.</li>
                <li>Collaborate in Large-Scale Tree Planting Initiatives: Join hands in transforming unused lands into thriving forests.</li>
                <li>Real-Time Monitoring: Track the growth and health of trees with our advanced monitoring tools.</li>
                <li>Community Engagement Tools: Engage with other members, share updates, and participate in discussions.</li>
                <li>User-Friendly Interface: Easily navigate through the platform and manage your projects.</li>
                <li>Educational Resources: Access a wealth of information on tree planting and sustainable practices.</li>
              </ul>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
