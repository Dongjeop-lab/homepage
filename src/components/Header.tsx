import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Github, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`header ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="container">
        <nav className="nav">
          <motion.a
            href="#"
            className="logo"
            whileHover={{ scale: 1.05 }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="logo-icon">
              <Zap size={20} />
            </div>
            동접Lab
          </motion.a>

          <ul className="nav-links">
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>프로젝트 소개</a></li>
            <li><a href="#timeline" onClick={(e) => { e.preventDefault(); scrollToSection('timeline'); }}>타임라인</a></li>
            <li><a href="#team" onClick={(e) => { e.preventDefault(); scrollToSection('team'); }}>팀 소개</a></li>
            <li><a href="#repositories" onClick={(e) => { e.preventDefault(); scrollToSection('repositories'); }}>저장소</a></li>
          </ul>

          <div className="nav-buttons">
            <a
              href="https://github.com/Dongjeop-lab"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <Github size={16} />
              GitHub
            </a>
            <button className="btn btn-primary">
              프로젝트 시작하기
            </button>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-menu"
          >
            <nav className="mobile-nav">
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>프로젝트 소개</a>
              <a href="#timeline" onClick={(e) => { e.preventDefault(); scrollToSection('timeline'); }}>타임라인</a>
              <a href="#team" onClick={(e) => { e.preventDefault(); scrollToSection('team'); }}>팀 소개</a>
              <a href="#repositories" onClick={(e) => { e.preventDefault(); scrollToSection('repositories'); }}>저장소</a>
              <div className="mobile-nav-buttons">
                <a
                  href="https://github.com/Dongjeop-lab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <Github size={16} />
                  GitHub
                </a>
                <button className="btn btn-primary">
                  프로젝트 시작하기
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>

    </motion.header>
  );
};

export default Header;
