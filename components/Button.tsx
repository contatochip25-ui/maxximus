import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  text: string;
  subtext?: string;
  fullWidth?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, subtext, fullWidth = false, className = '' }) => {
  const handleClick = () => {
    window.open('https://chat.whatsapp.com/BzsUwu8bOsEDlrPISjVuIY?mode=gi_t', '_blank');
  };

  return (
    <div className={`flex flex-col items-center ${fullWidth ? 'w-full' : 'w-auto'} ${className}`}>
      <button
        onClick={handleClick}
        className={`
          group relative flex items-center justify-center gap-3
          bg-brand-neon hover:bg-brand-neonhover
          text-brand-black font-black uppercase tracking-wider
          py-5 px-8 rounded-sm
          transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(204,255,0,0.4)]
          ${fullWidth ? 'w-full' : 'w-auto min-w-[300px]'}
        `}
      >
        <span className="text-lg md:text-xl z-10">{text}</span>
        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform z-10" strokeWidth={3} />
        
        {/* Shine effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent z-0" />
      </button>
      
      {subtext && (
        <span className="mt-3 text-xs md:text-sm text-gray-400 font-medium tracking-wide flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          {subtext}
        </span>
      )}
    </div>
  );
};

export default Button;