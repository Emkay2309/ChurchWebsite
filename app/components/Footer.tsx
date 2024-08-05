import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t-2 text-white px-6 py-8 mt-24 w-full ">
      <div className="container mx-auto px-12 flex flex-col md:flex-row justify-between  items-center">
        
        <div className=" mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Your Brand</h2>
          <p className="text-gray-400">© 2024 Your Brand. All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <div className="mb-4 md:mb-0">
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-gray-300">Insta</a></li>
            <li><a href="#services" className="hover:text-gray-300">Facebook</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Us</a></li>
            <li><a href="#blog" className="hover:text-gray-300">Blog</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
