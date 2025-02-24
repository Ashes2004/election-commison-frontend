import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-8">
        <div className="max-w-5xl bg-white p-10 rounded-lg shadow-lg border border-gray-300 text-center">
          <h1 className="text-5xl font-bold text-blue-800 mb-6">Election Commission of India</h1>
          <p className="text-gray-600 text-lg mb-6 italic">Ensuring Transparency & Integrity in Elections</p>
          
          <img
            src="https://i.ibb.co/DHLLMh4w/illustration-people-different-showing-voting-260nw-1357677092.jpg"
            alt="Election Commission"
            className="w-full rounded-lg mb-6 shadow-md"
          />
          
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The Election Commission of India (ECI) is the independent authority overseeing elections across the country.
            It is committed to conducting free and fair elections by maintaining transparency and adopting advanced
            technologies to strengthen the democratic process.
          </p>
          
          <h2 className="text-3xl font-semibold text-blue-700 mt-8 mb-4">Our Core Values</h2>
          <div className="grid grid-cols-2 gap-6 text-left">
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-blue-600">Fair Elections</h3>
              <p className="text-gray-700">Ensuring unbiased and ethical election processes.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-blue-600">Voter Empowerment</h3>
              <p className="text-gray-700">Encouraging voter participation through education and awareness.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-blue-600">Transparency</h3>
              <p className="text-gray-700">Ensuring open and clear election procedures.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-blue-600">Innovation</h3>
              <p className="text-gray-700">Adopting cutting-edge technology for secure elections.</p>
            </div>
          </div>
          
          <p className="text-gray-700 text-lg leading-relaxed mt-6">
            As the guardian of democracy, the Election Commission of India continues to refine electoral processes,
            safeguard voter rights, and enhance participation to build a stronger democracy for future generations.
          </p>
          
          <div className="flex justify-center items-center mt-8">
            <button className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
