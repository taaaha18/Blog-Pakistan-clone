import React, { useState } from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, ChevronUp } from 'lucide-react';
import './CSS/footer.css';

const Footer = ({ 
  blogTitle = "Blog Pakistan",
  blogDescription = "Blogpakistan is an up-and-coming modern blog hub aiming to provide a fresh perspective on every day Pakistan. A digital platform to promote Pakistani startups and local businesses and help them to improve their digital footprints.",
  subscriptionTitle = "Subscribe For Latest News & Updates",
  subscriptionPlaceholder = "Your email address",
  subscriptionButtonText = "Subscribe",
  followUsTitle = "Follow US On",
  copyrightText = "Copyright © 2025 Blog Pakistan, All rights reserved. Powered by Ebridge",
  usefulLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Blogs", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Lifestyle", href: "#" },
    { name: "Promote With Us", href: "#" },
    { name: "Privacy Policy", href: "#" }
  ],
  categories = [
    { name: "News & Trends", href: "#" },
    { name: "Automobile", href: "#" },
    { name: "IT & Tech", href: "#" },
    { name: "Business", href: "#" },
    { name: "Sports", href: "#" },
    { name: "Travel", href: "#" },
    { name: "Entertainment", href: "#" },
    { name: "Education", href: "#" }
  ],
  authors = [
    { name: "Amna Ayaz", href: "#" },
    { name: "Urooj Murtaza", href: "#" },
    { name: "Kausar Fatmi", href: "#" },
    { name: "Huda Shabab", href: "#" },
    { name: "Ana Sami", href: "#" },
    { name: "Noor Fatime", href: "#" },
    { name: "Ali Usama", href: "#" },
    { name: "Umair Khan", href: "#" }
  ],
  socialLinks = [
    { icon: "facebook", href: "#", label: "Facebook" },
    { icon: "twitter", href: "#", label: "Twitter" },
    { icon: "linkedin", href: "#", label: "LinkedIn" },
    { icon: "instagram", href: "#", label: "Instagram" },
    { icon: "youtube", href: "#", label: "YouTube" }
  ],
  onSubscribe = (email) => console.log('Subscribed:', email),
  showScrollToTop = true,
  className = ""
}) => {
  const [email, setEmail] = useState('');
  const [showToTop, setShowToTop] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) {
      onSubscribe(email);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (iconType) => {
    const iconProps = { size: 18, color: "#ffffff" };
    
    switch (iconType.toLowerCase()) {
      case 'facebook':
        return <Facebook {...iconProps} />;
      case 'twitter':
        return <Twitter {...iconProps} />;
      case 'linkedin':
        return <Linkedin {...iconProps} />;
      case 'instagram':
        return <Instagram {...iconProps} />;
      case 'youtube':
        return <Youtube {...iconProps} />;
      default:
        return <Facebook {...iconProps} />;
    }
  };

  return (
    <footer className={`footer ${className}`}>
      {/* Green top border */}
      <div className="footer-top-border"></div>
      
      <div className="footer-container">
        <div className="footer-content">
          
          {/* Blog Pakistan Section */}
          <div className="footer-section footer-about">
            <h3 className="footer-title">{blogTitle}</h3>
            <p className="footer-description">{blogDescription}</p>
            
            {/* Newsletter Subscription */}
            <div className="footer-subscription">
              <h4 className="subscription-title">{subscriptionTitle}</h4>
              <div className="subscription-form">
                <input
                  type="email"
                  className="subscription-input"
                  placeholder={subscriptionPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button 
                  type="button" 
                  className="subscription-button"
                  onClick={handleSubscribe}
                >
                  {subscriptionButtonText}
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div className="footer-social">
              <h4 className="social-title">{followUsTitle}</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="social-icon"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {getSocialIcon(social.icon)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="footer-section footer-links">
            <h3 className="footer-title">Useful Links</h3>
            <ul className="footer-list">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Section */}
          <div className="footer-section footer-categories">
            <h3 className="footer-title">Categories</h3>
            <ul className="footer-list">
              {categories.map((category, index) => (
                <li key={index}>
                  <a href={category.href} className="footer-link">
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Author Section */}
          <div className="footer-section footer-authors">
            <h3 className="footer-title">Author</h3>
            <ul className="footer-list">
              {authors.map((author, index) => (
                <li key={index}>
                  <a href={author.href} className="footer-link">
                    {author.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-bottom">
          <p className="copyright-text">{copyrightText}</p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </footer>
  );
};

export default Footer;