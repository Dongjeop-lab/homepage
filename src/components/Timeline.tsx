import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Users, Target, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TimelinePageProps {
  onGoBack: () => void;
  onServiceV1Click: () => void;
  onServiceV2Click: () => void;
}

const TimelinePage: React.FC<TimelinePageProps> = ({ 
  onGoBack, 
  onServiceV1Click, 
  onServiceV2Click 
}) => {
  const timelineData = [
    {
      phase: "PI 1",
      period: "7/21 ~ 9/28 (10주)",
      title: "Service_v1 개발",
      description: "킥오프부터 중간 발표까지",
      status: "진행중",
      color: "bg-blue-500"
    },
    {
      phase: "PI 2",
      period: "9/29 ~ 12/13 (11주)",
      title: "Service_v2 개발",
      description: "캠페인 시작부터 최종 완성까지",
      status: "예정",
      color: "bg-green-500"
    }
  ];

  const milestones = [
    {
      date: "8/24",
      title: "방향성 확정",
      status: "완료",
      description: "P1/P2 방향성 및 데이터 수집 방안 확정"
    },
    {
      date: "9/7",
      title: "Service_v1 기획 완료",
      status: "완료",
      description: "Service_v1 기획 확정 및 V1 기획 픽스"
    },
    {
      date: "9/9",
      title: "V1 기획 픽스",
      status: "완료",
      description: "Service_v1 최종 기획 확정"
    },
    {
      date: "9/27",
      title: "B안 개발 완료",
      status: "진행중",
      description: "B안 개발 완료 (must+should 기능)"
    },
    {
      date: "9/28",
      title: "B안 QA 완료",
      status: "진행중",
      description: "B안 개발 및 디자인 QA 완료, 중간 발표"
    },
    {
      date: "9/29",
      title: "캠페인 실행",
      status: "예정",
      description: "캠페인 실행 및 홍보 활동 시작"
    },
    {
      date: "10/12",
      title: "A안 개발 완료",
      status: "예정",
      description: "A안 전체 API 개발 및 통합 QA 완료"
    },
    {
      date: "10/15",
      title: "A안 릴리즈 & 홍보",
      status: "예정",
      description: "A안 릴리즈 + 홍보 및 Service_v2 기획 시작"
    },
    {
      date: "11/17",
      title: "캠페인 종료",
      status: "예정",
      description: "Service_v1 캠페인 종료 및 성과 측정"
    },
    {
      date: "11/23",
      title: "Service_v2 완성",
      status: "예정",
      description: "Service_v2 개발 완료 및 통합 테스트"
    },
    {
      date: "12/13",
      title: "최종 발표",
      status: "예정",
      description: "최종 성과 공유회 및 차기 계획 논의"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-y-auto timeline-container">
      <div className="container py-8 pb-16">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <Button variant="ghost" onClick={onGoBack} className="flex items-center gap-2 self-start min-h-[44px]">
              <ArrowLeft className="h-4 w-4" />
              뒤로가기
            </Button>
            <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">프로젝트 타임라인</h1>
          </div>
        </div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card border rounded-lg p-6 mb-8"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 flex items-center gap-2">
            <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            전체 프로젝트 개요
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="text-2xl sm:text-3xl font-bold text-primary">21주</div>
              <div className="text-sm sm:text-base text-muted-foreground">전체 프로젝트 기간</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl sm:text-3xl font-bold text-primary">2단계</div>
              <div className="text-sm sm:text-base text-muted-foreground">PI 1 & PI 2</div>
            </div>
            <div className="text-center p-4 sm:col-span-2 md:col-span-1">
              <div className="text-2xl sm:text-3xl font-bold text-primary">11개</div>
              <div className="text-sm sm:text-base text-muted-foreground">주요 마일스톤</div>
            </div>
          </div>
        </motion.div>

        {/* Timeline Phases */}
        <div className="space-y-8 mb-12">
          {timelineData.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full ${phase.color} border-4 border-background shadow-lg`}></div>
                  {index < timelineData.length - 1 && (
                    <div className="w-0.5 h-24 sm:h-32 bg-border mt-4"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 bg-card border rounded-lg p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <span className="text-xs sm:text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        {phase.phase}
                      </span>
                      <h3 className="text-lg sm:text-xl font-semibold mt-2">{phase.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">{phase.description}</p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2">
                      <div className="text-xs sm:text-sm text-muted-foreground">{phase.period}</div>
                      <div className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${
                        phase.status === '완료' ? 'bg-green-100 text-green-800' :
                        phase.status === '진행중' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {phase.status === '완료' && <CheckCircle className="h-3 w-3" />}
                        {phase.status}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-center">
                      <Button 
                        variant="outline" 
                        onClick={index === 0 ? onServiceV1Click : onServiceV2Click}
                        className="w-full min-h-[44px] text-sm sm:text-base"
                      >
                        {index === 0 ? 'Service_v1 상세보기' : 'Service_v2 상세보기'}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-card border rounded-lg p-6"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 flex items-center gap-2">
            <Target className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            주요 마일스톤
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {milestones.map((milestone, index) => (
              <div key={index} className="border rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <span className="text-sm font-medium text-primary">{milestone.date}</span>
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${
                    milestone.status === '완료' ? 'bg-green-100 text-green-800' :
                    milestone.status === '진행중' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {milestone.status === '완료' && <CheckCircle className="h-3 w-3" />}
                    {milestone.status}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">{milestone.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{milestone.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TimelinePage;