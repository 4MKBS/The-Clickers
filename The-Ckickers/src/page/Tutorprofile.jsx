import React, { useState } from "react";

const TutorProfile = () => {
  const [showCoursesPopup, setShowCoursesPopup] = useState(false);
  const [showEnrollPopup, setShowEnrollPopup] = useState(false);

  const handleCoursesPopup = () => setShowCoursesPopup(!showCoursesPopup);
  const handleEnrollPopup = () => setShowEnrollPopup(!showEnrollPopup);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-6">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg flex flex-wrap">
        {/* Left Block */}
        <div className="w-full md:w-1/2 border-r border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Previously Tutored Courses
          </h2>
          <ul className="space-y-4">
            <li>
              <h3 className="font-medium text-gray-700">Math 101</h3>
              <p className="text-sm text-gray-500 italic">
                "Great teaching methods!" - John Doe
              </p>
            </li>
            <li>
              <h3 className="font-medium text-gray-700">Physics 202</h3>
              <p className="text-sm text-gray-500 italic">
                "Explained concepts clearly!" - Jane Smith
              </p>
            </li>
            <li>
              <h3 className="font-medium text-gray-700">Chemistry 303</h3>
              <p className="text-sm text-gray-500 italic">
                "Helpful and patient." - Michael Lee
              </p>
            </li>
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
              Dr. Emily Johnson
            </h2>
            <p className="text-sm text-gray-600">Department: Physics</p>
            <p className="text-sm text-gray-600">
              Position: Associate Professor
            </p>
            <p className="text-sm text-gray-600">
              Graduated from: MIT, Physics
            </p>
          </div>
          <div className="mt-6 text-center">
            <button
              onClick={handleCoursesPopup}
              className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600"
            >
              View Capable Courses
            </button>
            <button
              onClick={handleEnrollPopup}
              className="px-4 py-2 ml-4 bg-green-500 text-white text-sm font-medium rounded-md hover:bg-green-600"
            >
              Enroll New Course
            </button>
          </div>
        </div>
      </div>

      {/* Capable Courses Popup */}
      {showCoursesPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-96 p-6 rounded-md shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Capable Courses
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>Math 101</li>
              <li>Physics 202</li>
              <li>Chemistry 303</li>
              <li>Advanced Calculus</li>
            </ul>
            <button
              onClick={handleCoursesPopup}
              className="mt-6 px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-md hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Enroll Course Popup */}
      {showEnrollPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-96 p-6 rounded-md shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Enroll New Course
            </h3>
            <form>
              <label className="block text-sm text-gray-600 mb-2">
                Course Name
              </label>
              <input
                type="text"
                placeholder="Enter course name"
                className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-md hover:bg-green-600"
              >
                Enroll
              </button>
              <button
                onClick={handleEnrollPopup}
                type="button"
                className="ml-4 px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-md hover:bg-red-600"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TutorProfile;
