// src/pages/JoinUs.jsx
import React, { useState } from 'react';

const JoinUs = () => {
  const [showForm, setShowForm] = useState(false);

  const handleContactClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = (e) => {
    if (e.target.classList.contains('overlay')) {
      setShowForm(false);
    }
  };

  return (
    <section id="join-us" className="min-h-screen items-center content-center justify-center bg-darkGreen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl text-white font-bold text-center mb-8">Join Us</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-white md:text-xl mb-8">
            We are always looking for passionate individuals and organizations to join our mission of reforesting barren lands. Whether you are a landowner, a sponsor, or a volunteer, your contribution can make a significant impact.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-silvi rounded-lg shadow-lg p-6 flex flex-col items-center">
              <h2 className="text-xl font-bold mb-2">Landowners</h2>
              <p className="text-center mb-4">Share your unused land and be a part of the green revolution.</p>
            </div>
            <div className="bg-silvi rounded-lg shadow-lg p-6 flex flex-col items-center">
              <h2 className="text-xl font-bold mb-2">Sponsors</h2>
              <p className="text-center mb-4">Invest in sustainable afforestation projects and help create a healthier planet.</p>
            </div>
            <div className="bg-silvi rounded-lg shadow-lg p-6 flex flex-col items-center">
              <h2 className="text-xl font-bold mb-2">Volunteers</h2>
              <p className="text-center mb-4">Join our community of volunteers and participate in planting and maintenance activities.</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <button
              onClick={handleContactClick}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out"
            >
              Contact Us
            </button>
          </div>
          
          {showForm && (
            <div className="overlay fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center" onClick={handleCloseForm}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" id="name" type="text" placeholder="Enter your name" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="description">Description</label>
                    <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" id="description" placeholder="Enter your message" rows="4"></textarea>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out">Send</button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
