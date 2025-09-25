import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Code size={32} />,
      title: '혁신적인 기술',
      description: '최신 기술 스택과 아키텍처를 활용한 확장 가능한 솔루션 개발'
    },
    {
      icon: <Users size={32} />,
      title: '협업 중심',
      description: '다양한 배경의 전문가들이 함께 만들어가는 창의적인 작업 환경'
    },
    {
      icon: <Zap size={32} />,
      title: '실시간 처리',
      description: '대용량 데이터의 실시간 처리와 분석을 통한 즉각적인 인사이트 제공'
    }
  ];

  const projects = [
    {
      title: '🤖 P1: 기똥찬 모델 만들기',
      description: '이동약자 접근성 판단을 위한 고정밀 AI 모델 개발',
      features: [
        '최소 맥락 정보 정의',
        'Model_v1 아키텍처 설계',
        '80% 이상 정확도 목표'
      ]
    },
    {
      title: '🎨 P2: 기똥찬 AI 모델 어필하기',
      description: 'AI 모델을 활용한 실제 서비스 구현 및 검증',
      features: [
        'Service_v1 캠페인 서비스',
        'Service_v2 고도화 서비스',
        'Demo_v1 홍보 페이지'
      ]
    },
    {
      title: '📊 Dataset_v1',
      description: '한국 실내 이미지 태그 데이터셋 구축',
      features: [
        '이동약자 접근성 정보 포함',
        '연구용 데이터셋 제공',
        '1만 장 이상 목표'
      ]
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>🎯 프로젝트 개요</h2>
          <p>
            동접Lab은 AI 기술을 활용하여 이동약자의 접근성을 판단하고, 
            더 나은 접근성 환경을 만들기 위한 혁신적인 프로젝트입니다.
          </p>
        </motion.div>

        <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="card"
            >
              <div className="card-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default About;
