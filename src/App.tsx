"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { 
  Github, 
  ExternalLink, 
  Menu, 
  X, 
  ArrowRight, 
  Users, 
  Code, 
  Zap, 
  Star,
  MapPin,
  Mail,
  Phone,
  ChevronUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import NotYetPage from '@/components/NotYetPage';
import ProjectPage from '@/components/ProjectPage';
import ApplyPage from '@/components/ApplyPage';
import TimelinePage from '@/components/Timeline';
import ServiceV1Detail from '@/components/ServiceV1Detail';
import ServiceV2Detail from '@/components/ServiceV2Detail';

interface Dot {
  x: number;
  y: number;
  baseColor: string;
  targetOpacity: number;
  currentOpacity: number;
  opacitySpeed: number;
  baseRadius: number;
  currentRadius: number;
}

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  projectId?: string;
  onClick?: () => void;
  onNotYetClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  tech, 
  githubUrl, 
  liveUrl, 
  imageUrl,
  projectId,
  onClick,
  onNotYetClick
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
    className="group relative overflow-hidden rounded-lg border border-border bg-background hover:border-primary/50 transition-all duration-300 cursor-pointer"
    onClick={onClick}
  >
    {/* GitHub-style header */}
    <div className="flex items-center justify-between p-4 border-b border-border bg-muted/30">
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
        <Github className="h-4 w-4" />
        <span>Dongjeop-lab</span>
      </div>
    </div>

    {/* Content */}
    <div className="p-4">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="flex items-center space-x-1 text-xs text-muted-foreground">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span>Public</span>
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-1 mb-4">
        {tech.map((item, index) => (
          <span 
            key={index}
            className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground border"
          >
            {item}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center space-x-4">
          <span>Updated 2 days ago</span>
          <span>•</span>
          <span>MIT License</span>
        </div>
        <div className="flex items-center space-x-2">
          {githubUrl && (
            <Button variant="ghost" size="sm" className="h-6 px-2 text-xs" onClick={(e) => { e.stopPropagation(); onNotYetClick?.(); }}>
              <Github className="h-3 w-3 mr-1" />
              Code
            </Button>
          )}
          {liveUrl && (
            <Button variant="ghost" size="sm" className="h-6 px-2 text-xs" onClick={(e) => { e.stopPropagation(); onNotYetClick?.(); }}>
              <ExternalLink className="h-3 w-3 mr-1" />
              Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

const DongjeobLab: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [showNotYetPage, setShowNotYetPage] = useState<boolean>(false);
  const [currentProject, setCurrentProject] = useState<string | null>(null);
  const [showApplyPage, setShowApplyPage] = useState<boolean>(false);
  const [showTimelinePage, setShowTimelinePage] = useState<boolean>(false);
  const [showServiceV1Detail, setShowServiceV1Detail] = useState<boolean>(false);
  const [showServiceV2Detail, setShowServiceV2Detail] = useState<boolean>(false);

  // URL 라우팅 처리
  useEffect(() => {
    const handleRoute = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      
      // URL 경로에 따라 페이지 설정
      if (path === '/timeline' || hash === '#timeline') {
        setShowTimelinePage(true);
        setShowNotYetPage(false);
        setShowApplyPage(false);
        setShowServiceV1Detail(false);
        setShowServiceV2Detail(false);
      } else if (path === '/service-v1' || hash === '#service-v1') {
        setShowServiceV1Detail(true);
        setShowTimelinePage(false);
        setShowNotYetPage(false);
        setShowApplyPage(false);
        setShowServiceV2Detail(false);
      } else if (path === '/service-v2' || hash === '#service-v2') {
        setShowServiceV2Detail(true);
        setShowTimelinePage(false);
        setShowNotYetPage(false);
        setShowApplyPage(false);
        setShowServiceV1Detail(false);
      } else if (path === '/apply' || hash === '#apply') {
        setShowApplyPage(true);
        setShowTimelinePage(false);
        setShowNotYetPage(false);
        setShowServiceV1Detail(false);
        setShowServiceV2Detail(false);
      } else {
        // 홈페이지로 리셋
        setShowTimelinePage(false);
        setShowNotYetPage(false);
        setShowApplyPage(false);
        setShowServiceV1Detail(false);
        setShowServiceV2Detail(false);
      }
    };

    // 초기 로드 시 라우팅 처리
    handleRoute();

    // URL 변경 감지
    window.addEventListener('popstate', handleRoute);
    window.addEventListener('hashchange', handleRoute);

    return () => {
      window.removeEventListener('popstate', handleRoute);
      window.removeEventListener('hashchange', handleRoute);
    };
  }, []);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10);
  });

  // 페이지 상단으로 스크롤하는 함수
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const dotsRef = useRef<Dot[]>([]);
  const gridRef = useRef<Record<string, number[]>>({});
  const canvasSizeRef = useRef<{ width: number; height: number }>({ width: 0, height: 0 });
  const mousePositionRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

  const DOT_SPACING = 30;
  const BASE_OPACITY_MIN = 0.3;
  const BASE_OPACITY_MAX = 0.6;
  const BASE_RADIUS = 1.5;
  const INTERACTION_RADIUS = 120;
  const INTERACTION_RADIUS_SQ = INTERACTION_RADIUS * INTERACTION_RADIUS;
  const OPACITY_BOOST = 0.8;
  const RADIUS_BOOST = 3;
  const GRID_CELL_SIZE = Math.max(50, Math.floor(INTERACTION_RADIUS / 1.5));

  const handleMouseMove = useCallback((event: globalThis.MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) {
      mousePositionRef.current = { x: null, y: null };
      return;
    }
    const rect = canvas.getBoundingClientRect();
    const canvasX = event.clientX - rect.left;
    const canvasY = event.clientY - rect.top;
    mousePositionRef.current = { x: canvasX, y: canvasY };
  }, []);

  const createDots = useCallback(() => {
    const { width, height } = canvasSizeRef.current;
    if (width === 0 || height === 0) return;

    const newDots: Dot[] = [];
    const newGrid: Record<string, number[]> = {};
    const cols = Math.ceil(width / DOT_SPACING);
    const rows = Math.ceil(height / DOT_SPACING);

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * DOT_SPACING + DOT_SPACING / 2;
        const y = j * DOT_SPACING + DOT_SPACING / 2;
        const cellX = Math.floor(x / GRID_CELL_SIZE);
        const cellY = Math.floor(y / GRID_CELL_SIZE);
        const cellKey = `${cellX}_${cellY}`;

        if (!newGrid[cellKey]) {
          newGrid[cellKey] = [];
        }

        const dotIndex = newDots.length;
        newGrid[cellKey].push(dotIndex);

        const baseOpacity = Math.random() * (BASE_OPACITY_MAX - BASE_OPACITY_MIN) + BASE_OPACITY_MIN;
        newDots.push({
          x,
          y,
          baseColor: `rgba(59, 130, 246, ${BASE_OPACITY_MAX})`,
          targetOpacity: baseOpacity,
          currentOpacity: baseOpacity,
          opacitySpeed: (Math.random() * 0.005) + 0.002,
          baseRadius: BASE_RADIUS,
          currentRadius: BASE_RADIUS,
        });
      }
    }
    dotsRef.current = newDots;
    gridRef.current = newGrid;
  }, [DOT_SPACING, GRID_CELL_SIZE, BASE_OPACITY_MIN, BASE_OPACITY_MAX, BASE_RADIUS]);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const container = canvas.parentElement;
    const width = container ? container.clientWidth : window.innerWidth;
    const height = container ? container.clientHeight : window.innerHeight;

    if (canvas.width !== width || canvas.height !== height ||
        canvasSizeRef.current.width !== width || canvasSizeRef.current.height !== height)
    {
      canvas.width = width;
      canvas.height = height;
      canvasSizeRef.current = { width, height };
      createDots();
    }
  }, [createDots]);

  const animateDots = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const dots = dotsRef.current;
    const grid = gridRef.current;
    const { width, height } = canvasSizeRef.current;
    const { x: mouseX, y: mouseY } = mousePositionRef.current;

    if (!ctx || !dots || !grid || width === 0 || height === 0) {
      animationFrameId.current = requestAnimationFrame(animateDots);
      return;
    }

    ctx.clearRect(0, 0, width, height);

    const activeDotIndices = new Set<number>();
    if (mouseX !== null && mouseY !== null) {
      const mouseCellX = Math.floor(mouseX / GRID_CELL_SIZE);
      const mouseCellY = Math.floor(mouseY / GRID_CELL_SIZE);
      const searchRadius = Math.ceil(INTERACTION_RADIUS / GRID_CELL_SIZE);
      for (let i = -searchRadius; i <= searchRadius; i++) {
        for (let j = -searchRadius; j <= searchRadius; j++) {
          const checkCellX = mouseCellX + i;
          const checkCellY = mouseCellY + j;
          const cellKey = `${checkCellX}_${checkCellY}`;
          if (grid[cellKey]) {
            grid[cellKey].forEach(dotIndex => activeDotIndices.add(dotIndex));
          }
        }
      }
    }

    dots.forEach((dot, index) => {
      dot.currentOpacity += dot.opacitySpeed;
      if (dot.currentOpacity >= dot.targetOpacity || dot.currentOpacity <= BASE_OPACITY_MIN) {
        dot.opacitySpeed = -dot.opacitySpeed;
        dot.currentOpacity = Math.max(BASE_OPACITY_MIN, Math.min(dot.currentOpacity, BASE_OPACITY_MAX));
        dot.targetOpacity = Math.random() * (BASE_OPACITY_MAX - BASE_OPACITY_MIN) + BASE_OPACITY_MIN;
      }

      let interactionFactor = 0;
      dot.currentRadius = dot.baseRadius;

      if (mouseX !== null && mouseY !== null && activeDotIndices.has(index)) {
        const dx = dot.x - mouseX;
        const dy = dot.y - mouseY;
        const distSq = dx * dx + dy * dy;

        if (distSq < INTERACTION_RADIUS_SQ) {
          const distance = Math.sqrt(distSq);
          interactionFactor = Math.max(0, 1 - distance / INTERACTION_RADIUS);
          interactionFactor = interactionFactor * interactionFactor;
        }
      }

      const finalOpacity = Math.min(1, dot.currentOpacity + interactionFactor * OPACITY_BOOST);
      dot.currentRadius = dot.baseRadius + interactionFactor * RADIUS_BOOST;

      ctx.beginPath();
      ctx.fillStyle = `rgba(59, 130, 246, ${finalOpacity.toFixed(3)})`;
      ctx.arc(dot.x, dot.y, dot.currentRadius, 0, Math.PI * 2);
      ctx.fill();
    });

    animationFrameId.current = requestAnimationFrame(animateDots);
  }, [GRID_CELL_SIZE, INTERACTION_RADIUS, INTERACTION_RADIUS_SQ, OPACITY_BOOST, RADIUS_BOOST, BASE_OPACITY_MIN, BASE_OPACITY_MAX, BASE_RADIUS]);

  useEffect(() => {
    handleResize();
    const handleMouseLeave = () => {
      mousePositionRef.current = { x: null, y: null };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    animationFrameId.current = requestAnimationFrame(animateDots);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [handleResize, handleMouseMove, animateDots]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const projects = [
    {
      title: "model-v1",
      description: "이동약자 접근성을 판단하는 AI 모델 개발. 최소맥락정의에 맞는 정확도 80% 이상의 모델을 목표로 합니다.",
      tech: ["Python", "PyTorch", "TensorFlow", "Computer Vision", "VLLM","Accessibility"],
      githubUrl: "https://github.com/Dongjeop-lab/model-v1",
      projectId: "model-v1"
    },
    {
      title: "service-v1",
      description: "사용자 참여를 통한 접근성 이미지 데이터 수집 서비스. 1,000명 이상의 참여자를 목표로 합니다.",
      tech: ["React", "Node.js", "MongoDB", "Image Processing"],
      githubUrl: "https://github.com/Dongjeop-lab/service-v1",
      liveUrl: "https://dongjeop-lab.github.io/campaign",
      projectId: "service-v1"
    },
    {
      title: "service-v2",
      description: "고도화된 AI 모델을 활용한 실제 서비스. 사용자 피드백을 통한 지속적인 개선을 목표로 합니다.",
      tech: ["AI/ML", "FastAPI", "React", "MySQL"],
      githubUrl: "https://github.com/Dongjeop-lab/service-v2",
      projectId: "service-v2"
    },
    {
      title: "dataset-v1",
      description: "이동약자 접근성 정보를 포함한 한국 실내 이미지 연구용 데이터셋 구축",
      tech: ["Data Augmentation", "Image Captioning", "Research Dataset"],
      githubUrl: "https://github.com/Dongjeop-lab/dataset-v1",
      projectId: "dataset-v1"
    }
  ];

  const teamMembers = [
    // 랩장
    { name: "조현욱", role: "랩장", avatar: "/homepage/team/leader_cho_hyunwook.JPG" },
    
    // PM
    { name: "이수민", role: "PM", avatar: "/homepage/team/PM_lee_sumin.png" },
    
    // 팀장들
    { name: "박희수", role: "AIML 팀장", avatar: "/homepage/team/AIML_park_heesu_leader.jpg" },
    { name: "강호형", role: "BEDE 팀장", avatar: "/homepage/team/BEDE_kang_hohyung_leader.jpg" },
    { name: "양혜림", role: "FE 팀장", avatar: "/homepage/team/FE_yang_hyerim_leader.jpg" },
    { name: "이윤선", role: "UXUI 팀장", avatar: "/homepage/team/UXUI_lee_yunsun_leader.jpg" },
    
    // AIML 팀
    { name: "김서영", role: "AIML", avatar: "/homepage/team/AIML_kim_seoyoung.png" },
    { name: "민지호", role: "AIML", avatar: "/homepage/team/AIML_min_jeeho.jpg" },
    { name: "이영준", role: "AIML", avatar: "/homepage/team/AIML_lee_youngjun.jpg" },
    
    // BEDE 팀
    { name: "김동욱", role: "BEDE", avatar: "/homepage/team/BEDE_kim_dongwook.png" },
    { name: "박수현", role: "BEDE", avatar: "/homepage/team/BEDE_park_soohyun.jpg" },
    { name: "이노정", role: "BEDE", avatar: "/homepage/team/BEDE_lee_nojung.jpeg" },
    
    // FE 팀
    { name: "조은", role: "FE", avatar: "/homepage/team/FE_cho_eun.png" },
    
    // UXUI 팀
    { name: "임유주", role: "UXUI", avatar: "/homepage/team/UXUI_im_yuju.jpg" }
  ];

  if (showNotYetPage) {
    return <NotYetPage onGoBack={() => setShowNotYetPage(false)} />;
  }

  if (currentProject) {
    return <ProjectPage projectId={currentProject} onGoBack={() => setCurrentProject(null)} onNotYetClick={() => setShowNotYetPage(true)} />;
  }

  if (showApplyPage) {
    return <ApplyPage onGoBack={() => setShowApplyPage(false)} />;
  }

  if (showServiceV2Detail) {
    return <ServiceV2Detail onGoBack={() => {
      setShowServiceV2Detail(false);
      window.history.pushState({}, '', '/timeline');
    }} />;
  }

  if (showServiceV1Detail) {
    return <ServiceV1Detail onGoBack={() => {
      setShowServiceV1Detail(false);
      window.history.pushState({}, '', '/timeline');
    }} />;
  }

  if (showTimelinePage) {
    return (
      <TimelinePage 
        onGoBack={() => {
          setShowTimelinePage(false);
          window.history.pushState({}, '', '/');
        }} 
        onServiceV1Click={() => {
          setShowServiceV1Detail(true);
          window.history.pushState({}, '', '/service-v1');
        }}
        onServiceV2Click={() => {
          setShowServiceV2Detail(true);
          window.history.pushState({}, '', '/service-v2');
        }}
      />
    );
  }


  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden mobile-scroll-fix">
      <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none opacity-60" />
      
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
          isScrolled && "shadow-md"
        )}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-3">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center"
            >
              <Zap className="h-6 w-6 text-primary-foreground" />
            </motion.div>
            <span className="text-xl font-bold">동접Lab</span>
          </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">소개</a>
          <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">프로젝트</a>
          <a href="#team" className="text-sm font-medium hover:text-primary transition-colors">팀</a>
          <button 
            onClick={() => {
              setShowTimelinePage(true);
              window.history.pushState({}, '', '/timeline');
            }}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            타임라인
          </button>
        </nav>

          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm" asChild>
              <a href="https://github.com/Dongjeop-lab" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button size="sm" onClick={() => setShowNotYetPage(true)}>
              프로젝트 시작하기
            </Button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t bg-background"
            >
          <nav className="container py-4 space-y-3">
            <a href="#about" className="block py-2 text-sm font-medium hover:text-primary">소개</a>
            <a href="#projects" className="block py-2 text-sm font-medium hover:text-primary">프로젝트</a>
            <a href="#team" className="block py-2 text-sm font-medium hover:text-primary">팀</a>
            <button 
              onClick={() => {
                setShowTimelinePage(true);
                window.history.pushState({}, '', '/timeline');
                setIsMobileMenuOpen(false);
              }}
              className="block py-2 text-sm font-medium hover:text-primary"
            >
              타임라인
            </button>
                <div className="pt-3 space-y-2">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href="https://github.com/Dongjeop-lab" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button size="sm" className="w-full" onClick={() => setShowNotYetPage(true)}>프로젝트 시작하기</Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="container py-24 md:py-32 lg:py-40">
          <div className="flex flex-col items-center justify-center text-center space-y-8 min-h-[60vh]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm"
            >
              <Star className="mr-2 h-4 w-4 text-primary" />
              이동약자를 위한 AI 연구
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
            >
              같이{" "}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                동등한 접근성
              </span>
              을 만들어가요
            </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl text-lg text-muted-foreground md:text-xl"
        >
          <strong>『동접』은 이동약자와 비이동약자 모두가 동등한 접근성을 가지길 바라는 마음으로 지어졌습니다.</strong>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="group" onClick={() => setShowApplyPage(true)}>
            프로젝트 지원하기
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" size="lg" className="group" asChild>
            <a href="https://techforimpact.io/lab/project/15?tab=member" target="_blank" rel="noopener noreferrer">
              프로젝트 소개
              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>


            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">80%+</div>
                <div className="text-muted-foreground">AI 모델 정확도</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1만+</div>
                <div className="text-muted-foreground">라벨링된 이미지</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1,000+</div>
                <div className="text-muted-foreground">캠페인 참여자</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              동접Lab 소개
            </h2>
        <div className="max-w-3xl mx-auto text-xl text-muted-foreground space-y-4">
          <p>
            모든 장소의 물리적이고 환경적인 접근성을 완벽하게 해결하는 데에는 한계가 있겠지만, <br/> 최소한 <strong>정보에 대한 접근성만큼은 누구에게나 공평하고 정확하게 제공되었으면 합니다.</strong>
          </p>
          <p>
            또한, 『동접』이라는 이름에는, <br/> <strong>모두가 하나의 목표를 향해 동시에 접속하듯 함께 협력하고 잘 해나가자는 의지</strong>도 담겨 있습니다.
          </p>
        </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-8 w-8 text-primary" />,
                title: "P1: 기똥찬 모델 만들기",
                description: "이동약자 접근성 판단 AI 모델 개발. 정확도 80% 이상의 고성능 모델을 목표로 합니다."
              },
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "P2: 기똥찬 AI 모델 어필하기",
                description: "관리자 대시보드와 B2C 서비스를 통한 모델 활용 및 사용자 참여 유도"
              },
              {
                icon: <Zap className="h-8 w-8 text-primary" />,
                title: "팀 협력",
                description: "팀원 모두가 하나의 목표를 향해 동시에 접속하듯 함께 협력하고 잘 해나가자는 의지"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              주요 산출물
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
              동접Lab에서 개발하는 이동약자 접근성 AI 프로젝트의 주요 산출물들을 만나보세요.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard {...project} onClick={() => project.projectId && setCurrentProject(project.projectId)} onNotYetClick={() => setShowNotYetPage(true)} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="container py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              우리 팀
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
              열정적이고 창의적인 전문가들이 함께 만들어가는 동접Lab입니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="text-center group"
              >
                <div className="relative mb-4 mx-auto w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-colors">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>

      </main>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={scrollToTop}
              size="icon"
              className="h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90"
              aria-label="맨 위로 이동"
            >
              <ChevronUp className="h-6 w-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <Zap className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-lg font-bold">동접Lab</span>
      </div>
              <p className="text-sm text-muted-foreground">
                동등한 접근성을 위한 AI 연구를 통한 모두가 접근 가능한 세상 만들기
        </p>
      </div>

            <div>
              <h3 className="font-semibold mb-4">프로젝트</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://github.com/Dongjeop-lab/model-v1" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Model_v1</a></li>
                <li><a href="https://github.com/Dongjeop-lab/service-v1" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Service_v1</a></li>
                <li><a href="https://github.com/Dongjeop-lab/service-v2" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Service_v2</a></li>
                <li><a href="https://github.com/Dongjeop-lab/dataset-v1" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Dataset_v1</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">팀</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-foreground transition-colors">소개</a></li>
                <li><a href="#team" className="hover:text-foreground transition-colors">팀</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">소셜</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 동접Lab. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DongjeobLab;
