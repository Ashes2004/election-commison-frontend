import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ArticlePage = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-3xl bg-white p-8 rounded-xl shadow-2xl border border-gray-200">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center leading-snug">
            Ensuring Electoral Integrity: The Role of the Election Commission
          </h1>
          <p className="text-gray-500 text-sm text-center mb-6">
            Published on February 24, 2025 | By Election Commission Team
          </p>
          <img
            src="https://currentaffairs.khanglobalstudies.com/wp-content/uploads/2024/03/Report-on-One-Nation-One-Election.jpg"
            alt="Election"
            className="w-full rounded-lg mb-6 shadow-lg"
          />
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            The Election Commission serves as the cornerstone of democracy, ensuring free and fair elections through rigorous
            regulations and advanced technological integration. With the rise of digital tools, voter engagement and transparency
            have reached new heights.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4 border-l-4 border-blue-600 pl-4">
            Key Responsibilities
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
            <li>
              <span className="font-semibold">Conducting Elections:</span> Overseeing national and state elections with strict
              guidelines.
            </li>
            <li>
              <span className="font-semibold">Voter Participation:</span> Encouraging voter registration and turnout through
              outreach programs.
            </li>
            <li>
              <span className="font-semibold">Election Monitoring:</span> Preventing fraud and ensuring a level playing field for
              candidates.
            </li>
            <li>
              <span className="font-semibold">Technology Implementation:</span> Adopting EVMs, blockchain, and AI-powered
              election security.
            </li>
          </ul>
          <blockquote className="italic bg-blue-50 border-l-4 border-blue-600 p-4 text-gray-700 shadow-sm mt-6 rounded-md">
            "A transparent election process is the foundation of a thriving democracy. Integrity and accessibility remain our
            top priorities."
          </blockquote>
          <p className="text-gray-700 leading-relaxed mt-6 text-lg">
            Looking forward, the Election Commission aims to implement AI-driven fraud detection, real-time polling analytics, and
            further streamline the voting process to ensure every citizen’s voice is heard. Upholding the principles of democracy
            is a continuous endeavor, and innovation is at the heart of shaping the future of electoral governance.
          </p>
          <div className="flex justify-between items-center mt-8 border-t pt-4">
            <p className="text-gray-600 text-lg">Follow our updates for the latest election reforms.</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all shadow-md">
              Read More
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ArticlePage;
