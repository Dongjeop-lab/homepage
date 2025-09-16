import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticles = () => {
      if (!particlesRef.current) return;

      // Clear existing particles
      particlesRef.current.innerHTML = '';

      // Create particles
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesRef.current.appendChild(particle);
      }
    };

    createParticles();
  }, []);

  return (
    <section className="hero">
      <div className="particles" ref={particlesRef} />
      <div className="container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-badge"
          >
            <Star size={16} />
            실시간 연결의 혁신
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            동접Lab에서{' '}
            <span className="gradient-text">미래를 연결</span>하세요
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            실시간 데이터 처리와 사용자 경험의 새로운 패러다임을 제시하는 혁신적인 기술 연구소입니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="hero-buttons"
          >
            <button className="btn btn-primary">
              프로젝트 둘러보기
              <ArrowRight size={16} />
            </button>
            <button className="btn btn-secondary">
              기술 문서 보기
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hero-stats"
          >
            <div className="hero-stat">
              <div className="hero-stat-number">21</div>
              <div className="hero-stat-label">총 주차</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">7</div>
              <div className="hero-stat-label">주요 산출물</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">5</div>
              <div className="hero-stat-label">주요 마일스톤</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">80%</div>
              <div className="hero-stat-label">목표 정확도</div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
