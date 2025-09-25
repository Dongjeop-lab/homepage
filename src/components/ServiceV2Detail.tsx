import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Users, Target, CheckCircle, Clock, Code, Database, Palette, BarChart3, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceV2DetailProps {
  onGoBack: () => void;
}

const ServiceV2Detail: React.FC<ServiceV2DetailProps> = ({ onGoBack }) => {
  const monthlySchedule = [
    {
      month: "10월",
      period: "10/6 ~ 11/2 (4주)",
      title: "Service_v2 기획 완료",
      status: "예정",
      items: [
        "Service_v2 기획 및 설계 완료",
        "POC 개발 및 검증 완료"
      ]
    },
    {
      month: "11월",
      period: "11/1 ~ 11/30 (4주)",
      title: "Service_v2 개발 & 통합",
      status: "예정",
      items: [
        "Service_v2 백엔드/프론트엔드 개발",
        "기술 문서 작성",
        "한국 실내 이미지 태그 데이터셋 연구 보고서 작성",
        "Service_v2 통합 테스트 및 배포",
        "최종 발표 준비"
      ]
    },
    {
      month: "12월",
      period: "12/1 ~ 12/13 (2주)",
      title: "최종 완성 & 발표",
      status: "예정",
      items: [
        "최종 보고서 작성 완료",
        "성과 지표 산출 완료",
        "시연 준비 완료",
        "발표자료 작성 완료",
        "최종 성과 공유회"
      ]
    }
  ];

  const teamWork = [
    {
      team: "BE/DE 팀 - Service_v2 개발",
      icon: <Database className="h-5 w-5" />,
      period: "10/6 ~ 11/23 (7주)",
      color: "bg-green-500",
      tasks: [
        "Service_v2 백엔드 설계 (10/6~11/2)",
        "Service_v2 백엔드 개발 (11/3~11/16)",
        "Service_v2 통합 테스트 (11/17~11/23)"
      ]
    },
    {
      team: "FE 팀",
      icon: <Code className="h-5 w-5" />,
      period: "10/6 ~ 11/23 (7주)",
      color: "bg-blue-500",
      tasks: [
        "Service_v2 프론트엔드 개발 (11/3~11/16)",
        "Service_v2 통합 테스트 (11/17~11/23)"
      ]
    },
    {
      team: "UXUI 팀",
      icon: <Palette className="h-5 w-5" />,
      period: "10/6 ~ 11/23 (7주)",
      color: "bg-purple-500",
      tasks: [
        "Service_v2 UX/UI 설계 (10/6~11/2)",
        "Service_v2 통합 테스트 (11/17~11/23)"
      ]
    },
    {
      team: "PM 팀",
      icon: <BarChart3 className="h-5 w-5" />,
      period: "10/6 ~ 12/13 (10주)",
      color: "bg-orange-500",
      tasks: [
        "Service_v2 기획 및 설계 (10/6~11/2)",
        "Service_v2 개발 관리 (11/3~11/23)",
        "최종 발표 준비 (11/24~12/7)",
        "최종 성과 공유회 (12/8~12/13)"
      ]
    },
    {
      team: "AIML 팀",
      icon: <Code className="h-5 w-5" />,
      period: "10/6 ~ 11/23 (7주)",
      color: "bg-blue-500",
      tasks: [
        "Service_v2 AI 모델 기획 (10/6~11/2)",
        "Service_v2 AI 모델 개발 (11/3~11/16)",
        "최종 모델 안정화 및 통합 (11/17~11/23)"
      ]
    }
  ];

  const milestones = [
    {
      date: "11/2",
      title: "Service_v2 기획 완료",
      status: "예정",
      description: "Service_v2 기획 및 설계 완료, POC 검증"
    },
    {
      date: "11/16",
      title: "Service_v2 개발 완료",
      status: "예정",
      description: "Service_v2 백엔드/프론트엔드 개발 완료"
    },
    {
      date: "11/23",
      title: "Service_v2 통합 완료",
      status: "예정",
      description: "Service_v2 통합 테스트 및 배포 완료"
    },
    {
      date: "12/7",
      title: "최종 발표 준비 완료",
      status: "예정",
      description: "최종 보고서 및 발표자료 완성"
    },
    {
      date: "12/13",
      title: "최종 성과 공유회",
      status: "예정",
      description: "전체 프로젝트 성과 발표 및 차기 계획 논의"
    }
  ];

  const successMetrics = [
    {
      title: "모델 성능 지표",
      items: [
        "11/23 (Service_v2 완성): 최종 모델 성능 측정 (목표: 80% 이상)"
      ]
    },
    {
      title: "서비스 지표",
      items: [
        "11/23 (Service_v2 완성): Service_v2 사용자 피드백 수집",
        "11/17 (캠페인 종료): Service_v1 참여자 수 측정 (목표: 1,000명 이상)"
      ]
    },
    {
      title: "최종 성과",
      items: [
        "12/13 (최종 발표): 전체 프로젝트 성과 정리 및 발표"
      ]
    }
  ];

  const improvements = [
    {
      title: "AI 모델 고도화",
      description: "Service_v1 기반 성능 향상",
      icon: <Code className="h-6 w-6" />
    },
    {
      title: "사용자 경험 개선",
      description: "Service_v1 피드백 반영",
      icon: <Palette className="h-6 w-6" />
    },
    {
      title: "시스템 안정성 강화",
      description: "통합 테스트 및 최적화",
      icon: <Database className="h-6 w-6" />
    },
    {
      title: "문서화 완성",
      description: "기술 문서 및 연구 보고서 작성",
      icon: <BarChart3 className="h-6 w-6" />
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
              <h1 className="text-2xl sm:text-3xl font-bold">Service_v2 상세 일정</h1>
              <p className="text-sm sm:text-base text-muted-foreground">2025년 10월 6일 ~ 2025년 12월 13일 (10주)</p>
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
            Service_v2 개요
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center p-3 sm:p-4">
              <div className="text-xl sm:text-3xl font-bold text-primary">10주</div>
              <div className="text-xs sm:text-sm text-muted-foreground">전체 기간</div>
            </div>
            <div className="text-center p-3 sm:p-4">
              <div className="text-xl sm:text-3xl font-bold text-primary">3개월</div>
              <div className="text-xs sm:text-sm text-muted-foreground">10월 ~ 12월</div>
            </div>
            <div className="text-center p-3 sm:p-4">
              <div className="text-xl sm:text-3xl font-bold text-primary">6팀</div>
              <div className="text-xs sm:text-sm text-muted-foreground">참여 팀</div>
            </div>
            <div className="text-center p-3 sm:p-4">
              <div className="text-xl sm:text-3xl font-bold text-primary">5개</div>
              <div className="text-xs sm:text-sm text-muted-foreground">주요 마일스톤</div>
            </div>
          </div>
        </motion.div>

        {/* Service_v1 → Service_v2 Transition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-6 mb-8"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 flex items-center gap-2">
            <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            Service_v1 → Service_v2 전환 계획
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Service_v1에서 Service_v2로 이어지는 작업</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Service_v1 사용자 피드백 분석
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Service_v1 성능 데이터 분석
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Service_v2 개선 방향 도출
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Service_v2 기술 스택 및 아키텍처 설계
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Service_v2 주요 개선사항</h3>
              <div className="grid grid-cols-2 gap-3">
                {improvements.map((improvement, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 border">
                    <div className="flex items-center gap-2 mb-1">
                      {improvement.icon}
                      <span className="text-sm font-medium">{improvement.title}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{improvement.description}</p>
                  </div>
                ))}
              </div>
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

export default ServiceV2Detail;
