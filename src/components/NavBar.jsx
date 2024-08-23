import React, { useState, useEffect } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.7 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false); 
  };

  return (
    <nav className="bg-white sticky top-0 p-1 md:p-4 shadow-md z-50">
      <div className="flex items-center justify-between">
        <a href="index.html" className="text-primary text-xl font-semibold">
          Securex
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1 md:p-4 text-black"
        >
          <span className="navbar-toggler-icon text-2xl">☰</span>
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } flex px-2 md:flex md:flex-row md:items-center md:space-x-6 space-y-4 md:space-y-0 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none z-40 flex-col md:flex-row`}
        >
          <a
            href="#home"
            className={`${
              activeSection === "home" ? "text-green-500" : "text-black"
            } hover:text-green-500 transition-colors`}
            onClick={handleLinkClick}
          >
            Home
          </a>
          <a
            href="#about"
            className={`${
              activeSection === "about" ? "text-green-500" : "text-gray-700"
            } hover:text-green-500 transition-colors`}
            onClick={handleLinkClick}
          >
            About
          </a>
          <a
            href="#product"
            className={`${
              activeSection === "product" ? "text-green-500" : "text-gray-700"
            } hover:text-green-500 transition-colors`}
            onClick={handleLinkClick}
          >
            Product
          </a>
          <a
            href="#testimonials"
            className={`${
              activeSection === "project" ? "text-green-500" : "text-gray-700"
            } hover:text-green-500 transition-colors`}
            onClick={handleLinkClick}
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className={`${
              activeSection === "contact" ? "text-green-500" : "text-gray-700"
            } hover:text-green-500 transition-colors`}
            onClick={handleLinkClick}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
