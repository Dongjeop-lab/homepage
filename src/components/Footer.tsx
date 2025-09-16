import React from 'react';
import { Zap, Github, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-icon">
                <Zap size={20} />
              </div>
              <span>동접Lab</span>
            </div>
            <p className="footer-description">
              실시간 연결의 혁신을 이끄는 기술 연구소
            </p>
            <div className="footer-social">
              <a
                href="https://github.com/Dongjeop-lab"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Github size={20} />
              </a>
              <a href="mailto:contact@dongjeop-lab.com" className="social-link">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>프로젝트</h4>
            <ul>
              <li><a href="#about">프로젝트 소개</a></li>
              <li><a href="#timeline">타임라인</a></li>
              <li><a href="#team">팀 소개</a></li>
              <li><a href="#repositories">저장소</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>기술</h4>
            <ul>
              <li><a href="#">AI/ML</a></li>
              <li><a href="#">백엔드</a></li>
              <li><a href="#">프론트엔드</a></li>
              <li><a href="#">데이터 분석</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>연락처</h4>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={16} />
                <span>contact@dongjeop-lab.com</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>서울특별시 강남구</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 동접Lab. All rights reserved.</p>
          <p className="footer-version">v0.1.0</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
