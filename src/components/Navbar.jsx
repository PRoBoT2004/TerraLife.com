// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link  } from 'react-scroll';
import { FaTree } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
      setVisible(isVisible);
      setPrevScrollPos(currentScrollPos);

      if (!isVisible) {
        setIsMobileMenuOpen(false); // Close the mobile menu when navbar disappears
      }
    };

    const handleSectionChange = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleSectionChange, {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    });

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav className={`fixed top-0 left-0 w-full  text-white transition-transform duration-300 ${visible ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
      <div className=''>
  <Link
    to="home"
    spy={true}
    smooth={true}
    duration={500}
    className="text-3xl font-bold text-white cursor-pointer"
  >
    <FaTree className='h-[20px] w-[20px] ml-[20px]' /> 
    {/* //image of logo will go here */}
  </Link>
</div>
        <div className="hidden md:flex space-x-4">
          <Link 
            to="home"
            spy={true}
            smooth={true}
            offset={0} // Changed offset to 0
            duration={500}
            className={`text-white text-xl hover:text-gray-300 hover:cursor-pointer ${activeSection === 'home' ? 'text-lightGreen font-bold' : ''}`}
          >
            Home
          </Link>
          <div className="h-6 border-l border-gray-300"></div> {/* Divider */}
          <Link 
            to="about"
            spy={true}
            smooth={true}
            offset={0} // Changed offset to 0
            duration={500}
            className={`text-white text-xl hover:text-gray-300 hover:cursor-pointer ${activeSection === 'about' ? 'text-lightGreen font-bold' : ''}`}
          >
            About
          </Link>
          <div className="h-6 border-l border-gray-300"></div> {/* Divider */}
          <Link 
            to="how-it-works"
            spy={true}
            smooth={true}
            offset={0} // Changed offset to 0
            duration={500}
            className={`text-white text-xl hover:text-gray-300 hover:cursor-pointer ${activeSection === 'how-it-works' ? 'text-lightGreen font-bold' : ''}`}
          >
            How It Works
          </Link>
          <div className="h-6 border-l border-gray-300"></div> {/* Divider */}
          <Link 
            to="project-summary"
            spy={true}
            smooth={true}
            offset={0} // Changed offset to 0
            duration={500}
            className={`text-white text-xl hover:text-gray-300 hover:cursor-pointer ${activeSection === 'project-summary' ? 'text-lightGreen font-bold' : ''}`}
          >
            Project Summary
          </Link>
          <div className="h-6 border-l border-gray-300"></div> {/* Divider */}
          <Link 
            to="join-us"
            spy={true}
            smooth={true}
            offset={0} // Changed offset to 0
            duration={500}
            className={`text-white text-xl hover:text-gray-300 hover:cursor-pointer ${activeSection === 'join-us' ? 'text-lightGreen font-bold ' : ''}`}
          >
            Join Us
          </Link>
          <div className="h-6 border-l border-gray-300"></div> {/* Divider */}
          <Link 
            to="team"
            spy={true}
            smooth={true}
            offset={0} // Changed offset to 0
            duration={500}
            className={`text-white text-xl hover:text-gray-300 hover:cursor-pointer ${activeSection === 'team' ? 'text-lightGreen font-bold' : ''}`}
          >
            Team
          </Link>
        </div>
        <div className="md:hidden">
          <button 
            className="text-white  absolutefocus:outline-none overflow-visible"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
            
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800  py-2">
          <div className="container mx-auto px-4 flex flex-col items-center">
            <Link to="home" className="text-white py-1 hover:text-gray-300">Home</Link>
            <hr className="my-1 w-full border-gray-600" /> {/* Divider */}
            <Link to="about" className="text-white py-1 hover:text-gray-300">About</Link>
            <hr className="my-1 w-full border-gray-600" /> {/* Divider */}
            <Link to="how-it-works" className="text-white py-1 hover:text-gray-300">How It Works</Link>
            <hr className="my-1 w-full border-gray-600" /> {/* Divider */}
            <Link to="project-summary" className="text-white py-1 hover:text-gray-300">Project Summary</Link>
            <hr className="my-1 w-full border-gray-600" /> {/* Divider */}
            <Link to="join-us" className="text-white py-1 hover:text-gray-300">Join Us</Link>
            <hr className="my-1 w-full border-gray-600" /> {/* Divider */}
            <Link to="team" className="text-white py-1 hover:text-gray-300">Team</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
