import React, { useState } from 'react';
import { FiX, FiGithub, FiLinkedin } from 'react-icons/fi'; // Importing Font Awesome icons
import { GiAbstract047 } from "react-icons/gi";

const Team = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
        {
      id: 1,
      name: "Priyawart Dwiwedi",
      role: "Mentor",
      photo: "./images/pf01.jpg",
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
      otherLink: "https://example.com/",
    },
    {
      id: 2,
      name: "Krishna",
      role: "Team Member",
      photo: "./images/pf02.jpg",
      linkedin: "https://www.linkedin.com/in/abhay-patel-5ba94a27b/",
      github: "https://github.com/PRoBoT2004",
      otherLink: "",
    },
    {
      id: 3,
      name: "Chirag Gavande",
      role: "Team Member",
      photo: "./images/pf03.jpg",
      linkedin: "https://www.linkedin.com/in/chirag-gavande-58568127a/",
      github: "https://github.com/chiraggavande",
      otherLink: "atomocalex01@gmail.com",
    },
    {
      id: 4,
      name: "Abhay Patel",
      role: "Team Member",
      photo: "./images/pf04.jpg",
      linkedin: "https://www.linkedin.com/in/abhay-patel-5ba94a27b/",
      github: "https://github.com/KanoAb08",
      otherLink: "patelabhay.dhara@gmail.com",
    },
    {
      id: 5,
      name: "Jashesh Kanzariya",
      role: "Team Member",
      photo: "./images/pf05.jpg",
      linkedin: "https://www.linkedin.com/in/jashesh-kanzariya/",
      github: "https://github.com/jasheshK",
      otherLink: "jashesh1803@gmail.com",
    },
    {
      id: 6,
      name: "Devashish Jore",
      role: "Team Member",
      photo: "./images/pf06.jpg",
      linkedin: "https://www.linkedin.com/in/devashish-jore-82b0a2214/",
      github: "https://github.com/Dj0511",
      otherLink: "https://example.com/",
    },
  ];

  const handleMemberClick = (member) => {
    setSelectedMember(member);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMember(null);
  };

  return (
    <section id="team" className="min-h-screen items-center content-center  bg-darkGreen py-12">

      <div className="min-h-screen items-center content-center justify-center bg-darkGreen py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">Meet Our Team</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex flex-col items-center justify-center cursor-pointer"
                onClick={() => handleMemberClick(member)}>
                <img src={member.photo} alt={member.name} className="w-32 h-32 rounded-full text-white mb-4 object-cover" />
                <p className="text-lg  text-white font-semibold">{member.name}</p>
              </div>
            ))}
          </div>
          {showModal && selectedMember && (
            <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
              <div className="bg-silvi rounded-lg p-8 max-w-md">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-semibold">{selectedMember.name}</h2>
                  <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700">
                    <FiX className="h-6 w-6" /> {/* Using React Icon component for close button */}
                  </button>
                </div>
                <div className="flex items-center">
                  <img src={selectedMember.photo} alt={selectedMember.name} className="w-32 h-32 rounded-full object-cover mr-4" />
                  <div>
                    <p><strong>Role:</strong> {selectedMember.role}</p>
                    <div className="mt-2 flex space-x-4">
                      <a href={selectedMember.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                        <FiGithub className="h-6 w-6" /> {/* Using React Icon component for GitHub */}
                      </a>
                      <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                        <FiLinkedin className="h-6 w-6" /> {/* Using React Icon component for LinkedIn */}
                      </a>
                      {/* <a href={selectedMember.otherLink} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                        <GiAbstract047 className="h-6 w-6" />
                      </a>  */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Team;
