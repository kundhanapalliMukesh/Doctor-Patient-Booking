import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-blue-500 py-6">
      <div className="container mx-auto">
        <div className="text-center">
          <p className="text-sm text-black">
            &copy; {new Date().getFullYear()} My Web. All rights reserved.
          </p>
          <p className="text-sm text-black mt-2">
            Made by Kundhanapalli Mukesh     </p>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://github.com/kundhanapalliMukesh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-5 h-5 text-black" />
          </a>
          <a
            href="https://www.linkedin.com/in/kundhanapalli-mukesh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-5 h-5 text-black" />
          </a>
          <a
            href="mailto:kundhanapallimukesh@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <MdEmail className="w-5 h-5 text-black" />
          </a>
        </div>
        <p className="text-sm text-black mt-4 text-center">
          Check out my{" "}
          <a
            className="text-black font-bold"
            href="https://drive.google.com/file/d/1atq7VK4xkmkTedVrW6YYVWtLaP8yweH2/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </a>{" "}
          and{" "}
          <a
            className="text-black font-bold"
            href="https://kundhanapallimukesh.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            portfolio
          </a>{" "}
          to know more about me. I'm open to new opportunities and excited to
          work with you!
        </p>
      </div>
    </div>
  );
};

export default Footer;
