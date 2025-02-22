import React from "react";

const commissioners = [
  {
    name: "Shri Gyanesh Kumar",
    title: "Chief Election Commissioner",
    image: "https://www.eci.gov.in/newimg/gallery/cec-Shri-Gyanesh-Kumar.jpg"
  },
  {
    name: "Dr. Sukhbir Singh Sandhu",
    title: "Election Commissioner",
    image: "https://www.eci.gov.in/newimg/gallery/EC-Dr-Sukhbir-Singh-Sandhu.jpg"
  },
  {
    name: "Dr. Vivek Joshi",
    title: "Election Commissioner",
    image: "https://www.eci.gov.in/newimg/gallery/dr-vivek-joshi.png"
  }
];

const images = [
  { src: "https://www.eci.gov.in/eci-backend/public/gallery/February/ThdJ0twnNpQyyPB1739964238.jpg", colSpan: "col-span-2", rowSpan: "row-span-2" },
  { src: "https://www.eci.gov.in/newimg/gallery/004.jpg", colSpan: "col-span-1", rowSpan: "row-span-1" },
  { src: "https://www.eci.gov.in/newimg/gallery/005.jpg", colSpan: "col-span-1", rowSpan: "row-span-2" },
  { src: "https://www.eci.gov.in/eci-backend/public/gallery/February/x8PDEGBPOmISORU1739513277.jpg", colSpan: "col-span-2", rowSpan: "row-span-1" }
];

export default function ElectionCommission() {
  return (
    <div className="flex flex-col lg:flex-row border-4 border-pink-500 items-start w-full min-h-screen bg-blue-50 p-4 gap-8">
      {/* Left Section - Commissioners */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full border-4 border-purple-900 lg:w-1/4 flex flex-col items-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">HON'BLE COMMISSION</h2>
        {commissioners.map((person, index) => (
          <div key={index} className="text-center mb-4">
            <img src={person.image} alt={person.name} className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full mx-auto border-4 border-blue-500" />
            <p className="mt-2 font-semibold text-gray-700">{person.name}</p>
            <p className="text-sm text-gray-500">{person.title}</p>
          </div>
        ))}
      </div>

      {/* Right Section - Photo Frame Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full lg:w-3/4 auto-rows-[150px] md:auto-rows-[200px]">
        {images.map((img, index) => (
          <div key={index} className={`relative overflow-hidden rounded-lg p-2 shadow-lg border-4 border-green-800 ${img.colSpan} ${img.rowSpan}`}>
            <img src={img.src} alt="News" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
          </div>
        ))}
      </div>
    </div>
  );
}
