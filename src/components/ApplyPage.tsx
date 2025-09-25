import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, Code, Calendar, MapPin, ExternalLink, Github, Database, Zap, UserCheck } from 'lucide-react';

interface ApplyPageProps {
  onGoBack: () => void;
}

const ApplyPage: React.FC<ApplyPageProps> = ({ onGoBack }) => {
  const handleApplyClick = () => {
    window.open('https://forms.gle/sA5BuUVsmCW8jB8r7', '_blank');
  };

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

      {/* 헤더 섹션 */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
          동접Lab과 함께하세요
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          동등한 접근성을 위한 AI 연구에 함께 참여하여 의미있는 변화를 만들어가요
        </p>
        <Button size="lg" onClick={handleApplyClick} className="group">
          <ExternalLink className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
          지원서 작성하기
        </Button>
      </div>

      {/* 모집 포지션 */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">모집 포지션</h2>
        <div className="max-w-2xl mx-auto">
          {/* Project Manager */}
          <div className="p-8 rounded-lg border border-border bg-card text-center">
            <UserCheck className="h-16 w-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">Project Manager (1명)</h3>
            <p className="text-muted-foreground">
              프로젝트 전체 기획과 일정 관리, 팀원들과의 소통을 담당합니다. 
              동접Lab의 목표 달성을 위해 체계적인 프로젝트 관리와 팀 운영을 이끌어갑니다.
            </p>
          </div>
        </div>
      </div>

      {/* 프로젝트 소개 */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">프로젝트 소개</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service_v1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-lg border border-border bg-card"
          >
            <div className="flex items-center space-x-3 mb-4">
              <Users className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Service_v1 - 이미지 수집 캠페인</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              크라우드소싱을 통해 접근성 이미지 데이터를 수집하는 웹 서비스입니다. 
              사용자들이 직접 촬영한 실내 공간 이미지를 업로드하고, 접근성 정보를 라벨링하여 
              AI 모델 학습에 필요한 고품질 데이터셋을 구축합니다.
            </p>
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'MongoDB', 'Image Processing'].map((tech, index) => (
                <span key={index} className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Service_v2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-lg border border-border bg-card"
          >
            <div className="flex items-center space-x-3 mb-4">
              <Zap className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Service_v2 - AI 모델 활용 서비스</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              기똥찬 모델을 어필하는 서비스 만들기
            </p>
            <div className="flex flex-wrap gap-2">
              {['AI/ML', 'FastAPI', 'React', 'PostgreSQL'].map((tech, index) => (
                <span key={index} className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* 프로젝트 일정 */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">프로젝트 일정</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border border-border bg-card text-center">
              <Calendar className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">모집 기간</h3>
              <p className="text-sm text-muted-foreground">모집 마감</p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-card text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">프로젝트 기간</h3>
              <p className="text-sm text-muted-foreground">09월 ~ 12월</p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-card text-center">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">활동 방식</h3>
              <p className="text-sm text-muted-foreground">온/오프 미팅</p>
            </div>
          </div>
        </div>
      </div>

      {/* 지원 방법 */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8">지원하기</h2>
        <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
          동접Lab과 함께 동등한 접근성을 위한 의미있는 프로젝트에 참여하고 싶다면 
          아래 버튼을 클릭하여 지원해주세요.
        </p>
        <Button size="lg" onClick={handleApplyClick} className="group">
          <ExternalLink className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
          지원서 작성하기
        </Button>
      </div>
    </motion.div>
  );
};

export default ApplyPage;
