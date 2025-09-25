import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Github, ExternalLink, Code, Users, Zap, Database } from 'lucide-react';

interface ProjectPageProps {
  projectId: string;
  onGoBack: () => void;
  onNotYetClick: () => void;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ projectId, onGoBack, onNotYetClick }) => {
  const projects = {
    'model-v1': {
      title: 'Model_v1 - 이동약자 접근성 판단 AI',
      description: '이동약자 접근성을 판단하는 AI 모델 개발. 최소맥락정의에 맞는 정확도 80% 이상의 모델을 목표로 합니다.',
      longDescription: 'Model_v1은 컴퓨터 비전 기술을 활용하여 실내 공간의 접근성을 자동으로 분석하고 평가하는 AI 모델입니다. 휠체어 사용자, 시각 장애인, 지체 장애인 등 다양한 이동약자의 접근성 요구사항을 고려하여 개발되었습니다.',
      tech: ['Python', 'TensorFlow', 'Computer Vision', 'Accessibility'],
      githubUrl: 'https://github.com/Dongjeop-lab/model-v1',
      liveUrl: undefined,
      features: [
        '실시간 접근성 분석',
        '다양한 장애 유형 지원',
        '높은 정확도 (80% 이상)',
        '실내 공간 특화'
      ],
      icon: <Code className="h-8 w-8 text-primary" />
    },
    'service-v1': {
      title: 'Service_v1 - 이미지 수집 캠페인',
      description: '사용자 참여를 통한 접근성 이미지 데이터 수집 서비스. 1,000명 이상의 참여자를 목표로 합니다.',
      longDescription: 'Service_v1은 크라우드소싱을 통해 접근성 이미지 데이터를 수집하는 웹 서비스입니다. 사용자들이 직접 촬영한 실내 공간 이미지를 업로드하고, 접근성 정보를 라벨링하여 AI 모델 학습에 필요한 고품질 데이터셋을 구축합니다.',
      tech: ['React', 'Node.js', 'MongoDB', 'Image Processing'],
      githubUrl: 'https://github.com/Dongjeop-lab/service-v1',
      liveUrl: 'https://dongjeop-lab.github.io/campaign',
      features: [
        '사용자 친화적 인터페이스',
        '대규모 데이터 수집',
        '접근성 정보 라벨링',
        '데이터 품질 관리'
      ],
      icon: <Users className="h-8 w-8 text-primary" />
    },
    'service-v2': {
      title: 'Service_v2 - AI 모델 활용 서비스',
      description: '고도화된 AI 모델을 활용한 실제 서비스. 사용자 피드백을 통한 지속적인 개선을 목표로 합니다.',
      longDescription: 'Service_v2는 Model_v1에서 개발된 AI 모델을 실제 서비스로 구현한 플랫폼입니다. 사용자들이 실시간으로 공간의 접근성을 확인할 수 있으며, 개인화된 접근성 정보와 경로 추천을 제공합니다.',
      tech: ['AI/ML', 'FastAPI', 'React', 'PostgreSQL'],
      githubUrl: 'https://github.com/Dongjeop-lab/service-v2',
      liveUrl: undefined,
      features: [
        '실시간 접근성 분석',
        '개인화된 추천',
        '사용자 피드백 시스템',
        '모바일 최적화'
      ],
      icon: <Zap className="h-8 w-8 text-primary" />
    },
    'dataset-v1': {
      title: 'Dataset_v1 - 한국 실내 이미지 태그 데이터셋',
      description: '이동약자 접근성 정보를 포함한 한국 실내 이미지 연구용 데이터셋 구축',
      longDescription: 'Dataset_v1은 한국의 실내 공간을 대상으로 한 접근성 정보가 포함된 대규모 이미지 데이터셋입니다. 다양한 실내 환경과 접근성 요소를 체계적으로 분류하고 라벨링하여 AI 연구와 개발에 활용할 수 있도록 구축되었습니다.',
      tech: ['Data Collection', 'Image Annotation', 'Research Dataset'],
      githubUrl: 'https://github.com/Dongjeop-lab/dataset-v1',
      liveUrl: undefined,
      features: [
        '10,000+ 라벨링된 이미지',
        '다양한 실내 공간',
        '체계적인 분류 체계',
        '연구용 오픈 데이터셋'
      ],
      icon: <Database className="h-8 w-8 text-primary" />
    }
  };

  const project = projects[projectId as keyof typeof projects];

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4 text-center">
        <h1 className="text-4xl font-bold mb-4">프로젝트를 찾을 수 없습니다.</h1>
        <p className="text-muted-foreground mb-8">요청하신 프로젝트 ID: {projectId}</p>
        <Button onClick={onGoBack}>홈으로 돌아가기</Button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="container py-16 md:py-24"
    >
      <Button variant="outline" onClick={onGoBack} className="mb-8 group">
        <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
        홈으로 돌아가기
      </Button>

      <div className="flex items-center space-x-4 mb-6">
        {project.icon}
        <h1 className="text-4xl font-bold tracking-tighter">{project.title}</h1>
      </div>

      <p className="text-xl text-muted-foreground mb-8">{project.longDescription}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">주요 기능</h2>
          <ul className="space-y-2 text-muted-foreground">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <svg className="mr-2 h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">기술 스택</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((item, index) => (
              <span key={index} className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground border border-secondary/50">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        {project.githubUrl && (
          <Button onClick={onNotYetClick}>
            <Github className="mr-2 h-4 w-4" /> GitHub
          </Button>
        )}
        {project.liveUrl && (
          <Button variant="outline" onClick={onNotYetClick}>
            <ExternalLink className="mr-2 h-4 w-4" /> 라이브 데모
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectPage;
