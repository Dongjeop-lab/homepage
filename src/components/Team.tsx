import React from 'react';
import { motion } from 'framer-motion';

const Team: React.FC = () => {
  const teams = [
    {
      title: '🤖 AI/ML 팀',
      period: '8/11 ~ 11/23 (15주)',
      description: 'Model_v1 개발 및 고도화, 최소 맥락 정보 정의 및 검증',
      color: '#ff6b6b'
    },
    {
      title: '🔧 백엔드/데이터 팀',
      period: '8/25 ~ 11/23 (13주)',
      description: '크롤링 시스템, 데이터 수집, API 개발 및 모델 배포',
      color: '#4ecdc4'
    },
    {
      title: '🎨 프론트엔드/UXUI 팀',
      period: '8/25 ~ 11/23 (13주)',
      description: '사용자 인터페이스 설계 및 개발, 사용성 테스트',
      color: '#45b7d1'
    },
    {
      title: '📊 기획/PM 팀',
      period: '7/21 ~ 12/13 (21주)',
      description: '프로젝트 관리, 캠페인 기획, 성과 관리',
      color: '#96ceb4'
    }
  ];

  return (
    <section id="team" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>👥 팀 소개</h2>
          <p>
            열정적이고 창의적인 전문가들이 함께 만들어가는 동접Lab입니다.
          </p>
        </motion.div>

        <div className="team-grid">
          {teams.map((team, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="team-card"
              style={{ '--team-color': team.color } as React.CSSProperties}
            >
              <h3>{team.title}</h3>
              <div className="team-period">{team.period}</div>
              <p>{team.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Team;
