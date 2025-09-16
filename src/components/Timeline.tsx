import React from 'react';
import { motion } from 'framer-motion';

const Timeline: React.FC = () => {
  const milestones = [
    {
      date: '8월 24일',
      title: '방향성 확정',
      description: 'P1/P2 방향성 및 데이터 수집 방안 확정'
    },
    {
      date: '9월 28일',
      title: '중간 발표',
      description: '모델 성과 발표 & 캠페인 기획 발표 & 데이터셋 연구결과 발표'
    },
    {
      date: '11월 23일',
      title: 'Service_v2 완성',
      description: 'Service_v2 개발 완료 및 통합 테스트'
    },
    {
      date: '12월 6일',
      title: '캠페인 종료',
      description: 'Service_v1 캠페인 종료 및 성과 측정'
    },
    {
      date: '12월 13일',
      title: '최종 발표',
      description: '최종 성과 공유회 및 차기 계획 논의'
    }
  ];

  return (
    <section id="timeline" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>📅 프로젝트 타임라인</h2>
          <p>
            동접Lab 프로젝트의 주요 마일스톤과 진행 상황을 확인하세요.
          </p>
        </motion.div>

        <div className="timeline">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-content">
                <div className="timeline-date">{milestone.date}</div>
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Timeline;
