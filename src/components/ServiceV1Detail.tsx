import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Users, Target, CheckCircle, Clock, Code, Database, Palette, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceV1DetailProps {
  onGoBack: () => void;
}

const ServiceV1Detail: React.FC<ServiceV1DetailProps> = ({ onGoBack }) => {
  const monthlySchedule = [
    {
      month: "7월",
      period: "7/21 ~ 8/10 (3주)",
      title: "프로젝트 킥오프",
      status: "완료",
      items: [
        "프로젝트 킥오프 및 팀 구성",
        "방향성 정렬 및 컨센서스 도출",
        "커뮤니케이션 체계 구축 (노션 + 디스코드)"
      ]
    },
    {
      month: "8월",
      period: "8/11 ~ 8/31 (3주)",
      title: "방향성 확정 & 시스템 설계",
      status: "완료",
      items: [
        "P1/P2 방향성 확정",
        "데이터 수집 방안 3안 검토",
        "최소 맥락 정보 정의 및 검증",
        "크롤링 시스템 설계 및 구현",
        "라벨링 Admin 시스템 설계"
      ]
    },
    {
      month: "9월",
      period: "9/1 ~ 9/30 (4주)",
      title: "Service_v1 개발 & 배포",
      status: "진행중",
      items: [
        "Service_v1 기획 확정 (9/1~9/7)",
        "B안 개발 시작 (9/17~9/27)",
        "B안 개발 완료 및 QA (9/28~9/30)",
        "A안 개발 시작 (9/29~)",
        "중간 발표 (9/28)"
      ]
    },
    {
      month: "10월",
      period: "10/1 ~ 10/15 (2주)",
      title: "Service_v1 완성",
      status: "예정",
      items: [
        "A안 개발 및 통합 QA (9/29~10/12)",
        "A안 릴리즈 + 홍보 (10/15)",
        "Service_v2 기획 시작 (10/6~)"
      ]
    }
  ];

  const teamWork = [
      {
        team: "BE/DE 팀 - Service_v1 개발",
        icon: <Database className="h-5 w-5" />,
        period: "9/17 ~ 10/15 (4주)",
        color: "bg-green-600",
        tasks: [
          ".",
          ".",
          ".",
          ".",
          ".",
          ".",
          "B안 개발 (9/17~9/27)",
          "[전체] B안 개발 / 디자인 QA (9/28~9/30)",
          "[전체] A안 개발 / 디자인 QA (9/29~10/12)",
          "A안 릴리즈 + 홍보 (10/15)"
        ]
      },
    {
      team: "FE 팀",
      icon: <Code className="h-5 w-5" />,
      period: "8/25 ~ 10/15 (7주)",
      color: "bg-blue-500",
      tasks: [
        "가설 검증 인터뷰 계획 (8/25~8/31)",
        "가설 검증 인터뷰 (8/25~9/7)",
        "Service_v1 기획 (9/1~9/7)",
        "V1 기획 픽스 (9/9)",
        "디자인 의존도 높은 기능 리스트업 (9/10)",
        "기능 개발 (9/16)",
        "Hifi 디자인 개발 (9/17~9/19)",
        "B안 개발 완료 (must+should) (9/28~9/30)",
        "[전체] B안 개발 / 디자인 QA (9/28~9/30)",
        "[전체] A안 개발 / 디자인 QA (9/29~10/12)",
        "A안 릴리즈 + 홍보 (10/15)"
      ]
    },
    {
      team: "UXUI 팀",
      icon: <Palette className="h-5 w-5" />,
      period: "8/25 ~ 10/15 (7주)",
      color: "bg-purple-500",
      tasks: [
        "가설 검증 인터뷰 계획 (8/25~8/31)",
        "가설 검증 인터뷰 (8/25~9/7)",
        "Service_v1 기획 (9/1~9/7)",
        "V1 기획 픽스 (9/9)",
        "B안 Hifi 진행 (9/11~9/15)",
        "B안 Hifi 공유 (happy case) (9/16)",
        "A안 기획 및 고도화 (9/17~9/19)",
        "A안 기획 (9/21~9/23)",
        "A안 디자인 진행 (9/24~9/26)",
        "B안 인터뷰 진행 (9/28~9/30)",
        "[전체] B안 개발 / 디자인 QA (9/28~9/30)",
        "[전체] A안 개발 / 디자인 QA (9/29~10/12)",
        "A안 릴리즈 + 홍보 (10/15)"
      ]
    },
    {
      team: "PM 팀",
      icon: <BarChart3 className="h-5 w-5" />,
      period: "7/21 ~ 10/15 (12주)",
      color: "bg-orange-500",
      tasks: [
        "프로젝트 킥오프 (7/21~8/10)",
        "방향성 정렬 (8/11~8/24)",
        "Service_v1 기획 완료 (8/24~9/7)",
        "캠페인 기획 완료 (9/8~9/21)",
        "중간 발표 준비",
        "캠페인 사전협의 (9/22~9/28)",
        "캠페인 실행 (9/29~10/15)",
        "A안 릴리즈 + 홍보 (10/15)",
        "Service_v2 기획 시작 (10/15~)"
      ]
    },
    {
      team: "AIML 팀",
      icon: <Code className="h-5 w-5" />,
      period: "8/11 ~ 10/15 (9주)",
      color: "bg-blue-500",
      tasks: [
        "최소 맥락 정보 정의 (8/11~8/24)",
        "Model_v1 아키텍처 설계 (8/25~8/31)",
        "OUTPUT 형태 확정 (9/1~9/7)",
        "Baseline 모델 구축 (9/8~9/14)",
        "1차 AI 개선안 구현 (9/15~9/21)",
        "1차 AI 개선안 학습 및 평가 (9/22~9/28)",
        "Model_v1 고도화 (2차) (10/1~10/15)"
      ]
    },
     {
       team: "BE/DE 팀 - 크롤링 & 라벨링",
       icon: <Database className="h-5 w-5" />,
       period: "8/25 ~ 10/12 (7주)",
       color: "bg-green-500",
       tasks: [
         "크롤링 시스템 설계 및 구현 (8/25~8/31)",
         "크롤링 데이터 수집 진행 (9/1~9/21)",
         "라벨링 작업 (1차)[3000/10000 장] (9/22~9/28)",
         "라벨링 작업 (2차)[6000/10000 장] (9/28~10/5)",
         "라벨링 작업 (3차)[10000/10000 장] (10/6~10/12)"
       ]
     },
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
      date: "9/29",
      title: "캠페인 실행",
      status: "예정",
      description: "캠페인 실행 및 홍보 활동 시작"
    }
  ];

  const successMetrics = [
    {
      title: "모델 성능 지표",
      items: [
        "9/28 (B안 개발 완료): Baseline 모델 성능 측정 + 한국 실내 이미지 태그 데이터셋 연구결과 발표",
        "10/15 (A안 릴리즈): Model_v1 고도화 완료 (목표: 70% 이상)"
      ]
    },
    {
      title: "서비스 지표",
      items: [
        "9/28 (B안 개발 완료): B안 사용자 피드백 수집 및 A안 개선사항 반영",
        "10/15 (A안 릴리즈): A안 사용자 피드백 수집 및 Service_v2 기획 반영"
      ]
    },
    {
      title: "Service_v1 최종 성과",
      items: [
        "10/15 (A안 릴리즈): Service_v1 전체 성과 정리 및 Service_v2 기획 시작",
        "캠페인 실행 및 홍보를 통한 서비스 인지도 향상"
      ]
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
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold">Service_v1 상세 일정</h1>
              <p className="text-sm sm:text-base text-muted-foreground">2025년 7월 21일 ~ 2025년 10월 15일 (12주)</p>
            </div>
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
            Service_v1 개요
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center p-3 sm:p-4">
              <div className="text-xl sm:text-3xl font-bold text-primary">12주</div>
              <div className="text-xs sm:text-sm text-muted-foreground">전체 기간</div>
            </div>
            <div className="text-center p-3 sm:p-4">
              <div className="text-xl sm:text-3xl font-bold text-primary">4개월</div>
              <div className="text-xs sm:text-sm text-muted-foreground">7월 ~ 10월</div>
            </div>
            <div className="text-center p-3 sm:p-4">
              <div className="text-xl sm:text-3xl font-bold text-primary">6팀</div>
              <div className="text-xs sm:text-sm text-muted-foreground">참여 팀</div>
            </div>
            <div className="text-center p-3 sm:p-4">
              <div className="text-xl sm:text-3xl font-bold text-primary">8개</div>
              <div className="text-xs sm:text-sm text-muted-foreground">주요 마일스톤</div>
            </div>
          </div>
        </motion.div>

        {/* Monthly Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 flex items-center gap-2">
            <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            월별 상세 일정
          </h2>
          <div className="space-y-6">
            {monthlySchedule.map((month, index) => (
              <div key={index} className="bg-card border rounded-lg p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <span className="text-xs sm:text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {month.month}
                    </span>
                    <h3 className="text-lg sm:text-xl font-semibold mt-2">{month.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{month.period}</p>
                  </div>
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${
                    month.status === '완료' ? 'bg-green-100 text-green-800' :
                    month.status === '진행중' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {month.status === '완료' && <CheckCircle className="h-4 w-4" />}
                    {month.status}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">주요 작업</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {month.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Team Work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 flex items-center gap-2">
            <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            팀별 주요 작업
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {teamWork.map((team, index) => (
              <div key={index} className="bg-card border rounded-lg p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${team.color} text-white flex-shrink-0`}>
                    {team.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold break-words">{team.team}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{team.period}</p>
                  </div>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {team.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                      <span className="break-words">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 flex items-center gap-2">
            <Target className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            주요 마일스톤
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-card border rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow">
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

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-card border rounded-lg p-6"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 flex items-center gap-2">
            <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            성공 지표
          </h2>
          <div className="space-y-6">
            {successMetrics.map((metric, index) => (
              <div key={index}>
                <h3 className="text-base sm:text-lg font-semibold mb-3">{metric.title}</h3>
                <ul className="space-y-3">
                  {metric.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-sm sm:text-base text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="break-words">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceV1Detail;
