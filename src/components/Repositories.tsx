import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const Repositories: React.FC = () => {
  const repositories = [
    {
      title: 'dongjeop-front',
      description: '프론트엔드 저장소',
      tech: 'TypeScript',
      githubUrl: 'https://github.com/Dongjeop-lab/dongjeop-front',
      features: ['React 기반 UI', '반응형 디자인', '현대적인 UX']
    },
    {
      title: 'dongjeop-backdata',
      description: '백엔드 및 데이터 저장소',
      tech: 'Python, Node.js',
      githubUrl: 'https://github.com/Dongjeop-lab/dongjeop-backdata',
      features: ['API 서버', '데이터 처리', '모델 배포']
    }
  ];

  return (
    <section id="repositories" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>📁 저장소</h2>
          <p>
            동접Lab 프로젝트의 소스코드와 개발 과정을 확인하세요.
          </p>
        </motion.div>

        <div className="repositories-grid">
          {repositories.map((repo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="repo-card"
            >
              <div className="repo-header">
                <div className="repo-icon">
                  <Github size={24} />
                </div>
                <div className="repo-info">
                  <h3>{repo.title}</h3>
                  <p>{repo.description}</p>
                </div>
              </div>

              <div className="repo-tech">
                <span className="tech-badge">{repo.tech}</span>
              </div>

              <div className="repo-features">
                <h4>주요 기능</h4>
                <ul>
                  {repo.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="repo-actions">
                <a
                  href={repo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <Github size={16} />
                  저장소 보기
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="github-org"
        >
          <div className="org-card">
            <h3>GitHub Organization</h3>
            <p>동접Lab의 모든 프로젝트와 팀 활동을 확인하세요</p>
            <a
              href="https://github.com/Dongjeop-lab"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Github size={16} />
              Organization 보기
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Repositories;
