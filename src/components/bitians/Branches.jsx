import React, { useState } from 'react';

function Branches({ onSelect,selectedBranches }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const branches = ['CSE','IT','ECE','EEE','MECH','PROD','CHEM','CIVIL','BIO'];

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const togglebranch = (branch) => {
    if (selectedBranches.includes(branch)) {
      
      onSelect(selectedBranches.filter((selectedbranch) => selectedbranch !== branch));
    } else {
    
      onSelect([...selectedBranches, branch]);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className={`bg-black opacity-80 border-white border text-white px-2 py-2 rounded-lg shadow focus:outline-none ${
          isDropdownOpen ? 'bg-gray-800' : 'hover:bg-gray-800 hover:text-black'
        }`}
      >
         Filter by branch
        <svg
          className={`w-4 h-4 ml-2 transition-transform ${
            isDropdownOpen ? 'transform rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isDropdownOpen && (
        <div className="absolute top-12 right-0 mt-2 w-36 max-h-80 overflow-y-auto border-white border text-white rounded-lg shadow-lg">
          <ul className=' '>
            {branches.map((branch) => (
              <li key={branch}>
                <label className="flex items-center p-2 bg-opacity-80 bg-black">
                  <input
                    type="checkbox"
                    className="mr-2 form-checkbox text-primary-600 focus:ring-primary-500"
                    value={branch}
                    checked={selectedBranches.includes(branch)}
                    onChange={() => togglebranch(branch)}
                  />
                  <span className="text-white z-50">{branch}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Branches;
