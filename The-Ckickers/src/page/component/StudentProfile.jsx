import React, { useState } from "react";
import Navbar from "../navbar";

const StudentProfile = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [appointmentPopup, setAppointmentPopup] = useState(false);
  const [selectedTutor, setSelectedTutor] = useState(null);

  // Dummy data
  const topRatedTutors = [
    {
      id: 1,
      name: "Dr. Emily Johnson",
      department: "Physics",
      rating: 4.9,
      availability: true,
    },
    {
      id: 2,
      name: "Dr. Robert Smith",
      department: "Mathematics",
      rating: 4.8,
      availability: false,
    },
    {
      id: 3,
      name: "Dr. Sarah Lee",
      department: "Chemistry",
      rating: 4.7,
      availability: true,
    },
  ];

  const previousTutors = ["Dr. Emily Johnson", "Dr. Michael Brown"];

  const handleSearch = () => {
    // Simulated search logic
    const results = topRatedTutors.filter((tutor) =>
      tutor.department.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleAppointment = (tutor) => {
    setSelectedTutor(tutor);
    setAppointmentPopup(true);
  };

  const closeAppointmentPopup = () => {
    setAppointmentPopup(false);
    setSelectedTutor(null);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-6">
        <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg flex flex-wrap">
          {/* Left Block */}
          <div className="w-full md:w-1/2 border-r border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Search Tutors
            </h2>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search by course or department"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                onClick={handleSearch}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Search
              </button>
            </div>

            {/* Search Results */}
            <div>
              {searchResults.length > 0 ? (
                <ul className="space-y-4">
                  {searchResults.map((tutor) => (
                    <li
                      key={tutor.id}
                      className="p-4 bg-gray-50 border border-gray-200 rounded-md shadow-sm"
                    >
                      <h3 className="font-medium text-gray-700">
                        {tutor.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Department: {tutor.department}
                      </p>
                      <p className="text-sm text-gray-600">
                        Rating: {tutor.rating}
                      </p>
                      <button
                        onClick={() => handleAppointment(tutor)}
                        className={`mt-2 px-4 py-2 text-white rounded-md ${
                          tutor.availability
                            ? "bg-green-500 hover:bg-green-600"
                            : "bg-gray-400 cursor-not-allowed"
                        }`}
                        disabled={!tutor.availability}
                      >
                        {tutor.availability
                          ? "Request Appointment"
                          : "Unavailable"}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500">No tutors found.</p>
              )}
            </div>

            {/* Top-Rated Tutors */}
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
              Top-Rated Tutors
            </h2>
            <ul className="space-y-4">
              {topRatedTutors.map((tutor) => (
                <li
                  key={tutor.id}
                  className="p-4 bg-gray-50 border border-gray-200 rounded-md shadow-sm"
                >
                  <h3 className="font-medium text-gray-700">{tutor.name}</h3>
                  <p className="text-sm text-gray-600">
                    Department: {tutor.department}
                  </p>
                  <p className="text-sm text-gray-600">
                    Rating: {tutor.rating}
                  </p>
                  <button
                    onClick={() => handleAppointment(tutor)}
                    className={`mt-2 px-4 py-2 text-white rounded-md ${
                      tutor.availability
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
                    disabled={!tutor.availability}
                  >
                    {tutor.availability ? "Request Appointment" : "Unavailable"}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Block */}
          <div className="w-full md:w-1/2 p-6">
            <div className="text-center">
              <img
                src="https://via.placeholder.com/120"
                alt="Profile"
                className="w-28 h-28 rounded-full mx-auto"
              />
              <h2 className="mt-4 text-2xl font-semibold text-gray-800">
                Alex Carter
              </h2>
              <p className="text-sm text-gray-600">
                Department: Computer Science
              </p>
              <p className="text-sm text-gray-600">Semester: 5th</p>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Previous Tutors
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                {previousTutors.map((tutor, index) => (
                  <li key={index}>{tutor}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Appointment Popup */}
        {appointmentPopup && selectedTutor && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white w-96 p-6 rounded-md shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Request Appointment
              </h3>
              <p>
                You are requesting an appointment with{" "}
                <span className="font-medium">{selectedTutor.name}</span>.
              </p>
              <form className="mt-4">
                <label className="block text-sm text-gray-600 mb-2">
                  Additional Details
                </label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter any additional information..."
                ></textarea>
                <button
                  type="submit"
                  className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={closeAppointmentPopup}
                  className="mt-4 ml-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default StudentProfile;
