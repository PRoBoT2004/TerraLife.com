// src/components/TeamMember.jsx
import React, { useState } from 'react';

const TeamMember = ({ member, onClick }) => {
  const [showIcons, setShowIcons] = useState(false);

  const handleToggleIcons = () => {
    setShowIcons(!showIcons);
  };

  return (
    <div className="text-center" onClick={() => onClick(member)}>
      <img
        src={member.photo}
        alt={member.name}
        className="w-32 h-32 mx-auto mb-2 rounded-full shadow-lg cursor-pointer"
        onMouseEnter={handleToggleIcons}
        onMouseLeave={handleToggleIcons}
      />
      {showIcons && (
        <div className="flex justify-center mt-2">
          <a href={member.github} target="_blank" rel="noopener noreferrer" className="mx-1 text-gray-600 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 0a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.69c-2.78.6-3.37-1.34-3.37-1.34-.46-1.17-1.12-1.48-1.12-1.48-.91-.62.07-.61.07-.61 1.01.07 1.54 1.03 1.54 1.03.9 1.54 2.36 1.1 2.94.84.09-.66.35-1.1.64-1.35-2.24-.25-4.6-1.12-4.6-4.98 0-1.1.39-2 1.03-2.7-.1-.26-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.55 9.55 0 012.5-.34 9.6 9.6 0 012.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.38.1 2.64.64.69 1.03 1.6 1.03 2.7 0 3.87-2.37 4.73-4.62 4.98.36.31.68.92.68 1.86l-.01 2.77c0 .26.18.57.69.48A10 10 0 0010 0z" clipRule="evenodd" />
            </svg>
          </a>
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mx-1 text-gray-600 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 3a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V3zm5 14H6V8h2v9zm-1-10a1 1 0 100-2 1 1 0 000 2zm6 4c-1.25 0-2 .75-2 2v5h-2V8h2v1c.5-.75 1.5-1.25 3-1.25s2 .5 2 1.25c0 .75-.5 1.25-1.25 1.5v.25c0 .25.25.5.5.5h.25v1.75h-.75c-.75 0-1.25-.5-1.25-1.25V11c0-.75.5-1.25 1.25-1.25h.75V8.75h-.25c-.25 0-.5.25-.5.5v.25c-.25.25-.5.5-.5 1.25-1.25 1.25h-.75v-.75h.75c.25 0 .5-.25.5-.5v-.25c.25-.25.5-.75.5-1.25v-.25c0-.5-.25-1-.75-1zM7 5a1 1 0 100-2 1 1 0 000 2z" />
            </svg>
          </a>
          <a href={member.otherLink} target="_blank" rel="noopener noreferrer" className="mx-1 text-gray-600 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-8a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </a>
        </div>
      )}
      <p className="text-lg font-semibold">{member.name}</p>
    </div>
  );
};

export default TeamMember;
