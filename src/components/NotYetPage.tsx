import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface NotYetPageProps {
  onGoBack: () => void;
}

const NotYetPage: React.FC<NotYetPageProps> = ({ onGoBack }) => {
  const imagePath = "/homepage/notyet.jpg"; // Assuming image is in public/notyet.jpg and base path is /homepage/

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="max-w-2xl w-full"
      >
        <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-6xl lg:text-7xl mb-8 text-primary">
          아직 구현 중입니다!
        </h1>
        <p className="text-xl text-muted-foreground mb-12 md:text-2xl">
          귀여운 강아지가 열심히 코딩하고 있어요. 조금만 기다려주세요! 😊
        </p>
        <div className="relative w-full max-w-md mx-auto mb-12 rounded-xl overflow-hidden shadow-2xl border-4 border-primary/50">
          <img
            src={imagePath}
            alt="Cute puppy coding"
            className="w-full h-full object-cover"
          />
        </div>
        <Button size="lg" variant="outline" onClick={onGoBack} className="group">
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          홈으로 돌아가기
        </Button>
      </motion.div>
    </div>
  );
};

export default NotYetPage;
