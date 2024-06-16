// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';

const Home = () => {
  const [backgroundUrl, setBackgroundUrl] = useState('');
  const [slogans, setSlogans] = useState([
    "Join us in reforesting the world!",
    "Together, we can make a greener future.",
    "Plant trees, save lives.",
  ]);
  const [currentSloganIndex, setCurrentSloganIndex] = useState(0);

  useEffect(() => {
    const fetchBackground = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?query=dark forest&orientation=landscape&client_id=pyK5_Q0plomYJwjhdTc9kjA5r9ibb6aXN24DRUGqJYY`
        );
        const data = await response.json();
        setBackgroundUrl(data.urls.regular);
      } catch (error) {
        console.error('Error fetching background:', error);
      }
    };

    fetchBackground();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSloganIndex((prevIndex) => (prevIndex + 1) % slogans.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slogans]);

  return (
    <section
      id="home"
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div className="text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to TerraLife</h1>
        <p className="text-lg md:text-xl mb-6">{slogans[currentSloganIndex]}</p>
        <a
          href="/app-download"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out"
        >
          Download Our App
        </a>
      </div>
    </section>
  );
};

export default Home;
