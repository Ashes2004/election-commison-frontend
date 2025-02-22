import React from "react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        {/* Election Commission Section */}
        <div>
          <h2 className="text-lg font-semibold">Election Commission of India</h2>
          <p className="mt-2 text-sm text-gray-300">
            The Election Commission of India is an autonomous constitutional authority 
            responsible for administering election processes in India. The body administers 
            elections to the Lok Sabha, Rajya Sabha, State Legislative Assemblies in India, 
            and the offices of the President and Vice President.
          </p>
          <p className="mt-2 text-sm text-gray-300">
            📍 Nirvachan Sadan, Ashoka Road, New Delhi 110001
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-3">
            <a href="#" className="hover:text-gray-400">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="mt-2 space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-gray-400">About ECI</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
            <li><a href="#" className="hover:text-gray-400">RTI Online</a></li>
            <li><a href="#" className="hover:text-gray-400">Apply for Voter Card</a></li>
            <li><a href="#" className="hover:text-gray-400">SVEEP</a></li>
            <li><a href="#" className="hover:text-gray-400">Officers Directory</a></li>
            <li><a href="#" className="hover:text-gray-400">Service Voter Portal</a></li>
          </ul>
        </div>

        {/* ECI Apps Links */}
        <div>
          <h2 className="text-lg font-semibold">ECI Apps Links</h2>
          <div className="mt-4 flex space-x-4">
            <img src="https://www.eci.gov.in/newimg/icons/ict/voter-helpline.png" alt="App 1" className="w-12 h-12"/>
            <img src="https://mythvsreality.eci.gov.in/assets/img/saksham-eci.png" alt="App 2" className="w-12 h-12"/>
            <img src="https://mythvsreality.eci.gov.in/assets/img/kyc-eci.png" alt="App 3" className="w-12 h-12"/>
            <img src="https://mythvsreality.eci.gov.in/assets/img/cVigil.png" alt="App 4" className="w-12 h-12"/>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-sm text-gray-400 border-t border-gray-700 pt-4">
        © Copyright Election Commission of India 2025
      </div>
    </footer>
  );
}

export default Footer;
