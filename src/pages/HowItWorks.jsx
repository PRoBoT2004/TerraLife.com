// src/pages/HowItWorks.jsx
import React from 'react';
import { FiCheckCircle } from 'react-icons/fi'; // Example of using Font Awesome icons

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="min-h-screen items-center content-center justify-center bg-darkGreen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">How It Works</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <FiCheckCircle className="h-12 w-12 text-green-500 mb-4" /> {/* Use React Icon component */}
            <h2 className="text-xl font-bold mb-2">Assess Land</h2>
            <p className="text-center">We evaluate the land to determine the best plant species for afforestation.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <FiCheckCircle className="h-12 w-12 text-green-500 mb-4" /> {/* Use React Icon component */}
            <h2 className="text-xl font-bold mb-2">Collaboration</h2>
            <p className="text-center">Landowners, sponsors, and volunteers collaborate to plan and execute the project.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <FiCheckCircle className="h-12 w-12 text-green-500 mb-4" /> {/* Use React Icon component */}
            <h2 className="text-xl font-bold mb-2">Plantation</h2>
            <p className="text-center">We plant and nurture trees, cultivating the growth of green landscapes.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
