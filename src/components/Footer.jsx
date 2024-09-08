import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#ededed] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div>
            <h1 className="text-xl font-bold">Lando</h1>
            <p className="text-sm text-gray-500">2021 © Lando. All rights reserved.</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-20">
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <a href="#" className="text-sm text-gray-700 hover:underline">Home</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-700 hover:underline">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-700 hover:underline">About us</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-700 hover:underline">Contact</a>
              </li>
            </ul>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <a href="#" className="text-sm text-gray-700 hover:underline">Facebook</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-700 hover:underline">Instagram</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-700 hover:underline">Twitter</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-700 hover:underline">LinkedIn</a>
              </li>
            </ul>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <a href="#" className="text-sm text-gray-700 hover:underline">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-700 hover:underline">Terms Of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
