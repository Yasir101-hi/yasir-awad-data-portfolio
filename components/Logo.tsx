import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  isDark?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", showText = true, isDark = false }) => {
  return (
    <div className={`flex items-center gap-3.5 ${className} group cursor-pointer`}>
      <div className={`w-[42px] h-[42px] flex items-center justify-center border ${isDark ? 'border-brand-green text-white' : 'border-brand-green text-brand-navy'} font-heading font-semibold text-[17px] tracking-wide transition-all group-hover:bg-brand-green group-hover:text-white`}>
        YA
      </div>
      {showText && (
        <span className={`font-heading font-semibold text-[22px] tracking-tight ${isDark ? 'text-white' : 'text-brand-navy'}`}>
          Yasir Awad
        </span>
      )}
    </div>
  );
};

export default Logo;

