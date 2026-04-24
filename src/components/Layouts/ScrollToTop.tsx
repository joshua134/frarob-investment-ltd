import { motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

interface ScrollToTopProps {
  show: boolean;
  onClick: () => void;
}

export const ScrollToTop = ({ show, onClick }: ScrollToTopProps) => {
  if (!show) return null;
  
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      onClick={onClick}
      className="fixed bottom-8 right-8 glass-effect p-3 rounded-full hover:bg-cyan-500/20 transition-all duration-300 z-50"
    >
      <ChevronUp className="w-5 h-5 text-cyan-400" />
    </motion.button>
  );
};