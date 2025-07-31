import React, { useState } from 'react';
import { Search, Facebook, Twitter, Linkedin, Instagram, Youtube, ChevronDown } from 'lucide-react';
import './CSS/Navbar.css';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="navbar">
     
      <div className="navbar-top">
        <div className="navbar-container">
          <div className="top-nav-links">
            <a href="#" className="top-nav-link">Health</a>
            <a href="#" className="top-nav-link">Shahrah e Food</a>
            <a href="#" className="top-nav-link">Sports</a>
            <a href="#" className="top-nav-link">Fusion</a>
            <a href="#" className="top-nav-link">Prices Pakistan</a>
          </div>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <Facebook size={16} />
            </a>
            <a href="#" className="social-icon">
              <Twitter size={16} />
            </a>
            <a href="#" className="social-icon">
              <Linkedin size={16} />
            </a>
            <a href="#" className="social-icon">
              <Instagram size={16} />
            </a>
            <a href="#" className="social-icon">
              <Youtube size={16} />
            </a>
          </div>
        </div>
      </div>

      
      <div className="navbar-main">
        <div className="navbar-container">
          <div className="navbar-brand">
            <div className="logo">
              <div className="logo-lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
              <span className="logo-text">
                <span className="blog-text">Blog</span>
                <span className="pakistan-text">Pakistan</span>
              </span>
            </div>
          </div>

          <div className="navbar-menu">
            <a href="#" className="nav-link">IT & Tech</a>
            <a href="#" className="nav-link">Automobile</a>
            <a href="#" className="nav-link">News & Trends</a>
            <a href="#" className="nav-link">Mobile Packages</a>
            
            <div className="nav-dropdown">
              <button 
                className="nav-link dropdown-toggle"
                onClick={() => handleDropdownToggle('lifestyle')}
              >
                Lifestyle <ChevronDown size={16} />
              </button>
              {activeDropdown === 'lifestyle' && (
                <div className="dropdown-menu">
                  <a href="#" className="dropdown-item">Fashion</a>
                  <a href="#" className="dropdown-item">Travel</a>
                  <a href="#" className="dropdown-item">Food</a>
                </div>
              )}
            </div>

            <div className="nav-dropdown">
              <button 
                className="nav-link dropdown-toggle"
                onClick={() => handleDropdownToggle('others')}
              >
                Others <ChevronDown size={16} />
              </button>
              {activeDropdown === 'others' && (
                <div className="dropdown-menu">
                  <a href="#" className="dropdown-item">Entertainment</a>
                  <a href="#" className="dropdown-item">Education</a>
                  <a href="#" className="dropdown-item">Business</a>
                </div>
              )}
            </div>
          </div>

          <div className="search-container">
            <button className="search-btn">
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;