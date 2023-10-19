import React, { useState } from 'react';

function GradYear({ onSelect, selectedYears }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const years = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027];

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleYear = (year) => {
    if (selectedYears.includes(year)) {
      const updatedYears = selectedYears.filter((selectedYear) => selectedYear !== year);
      onSelect(updatedYears);
    } else {
      const updatedYears = [...selectedYears, year];
      onSelect(updatedYears);
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
   
          Filter by year
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
        <div className="absolute top-12 right-0 mt-2 w-36  border-white border max-h-80 text-white rounded-lg shadow-lg overflow-y-auto">
          <ul >
            {years.map((year) => (
              <li key={year}>
                <label className="flex items-center p-2 bg-opacity-80 bg-black">
                  <input
                    type="checkbox"
                    className="mr-2 form-checkbox text-primary-600 focus:ring-primary-500"
                    value={year}
                    checked={selectedYears.includes(year)}
                    onChange={() => toggleYear(year)}
                  />
                  <span className="text-white">{year}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default GradYear;
