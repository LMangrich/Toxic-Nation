import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick,
  className = '' 
}) => {
  const baseStyles = "px-3 py-1 text-16 font-semibold transition-all duration-300";
  
  const variantStyles = {
  primary: `
    bg-toxic-green/40 border border-toxic-green text-white 
    shadow-brand-glow 
    hover:shadow-glow-green-tight hover:text-soft-toxic-green 
    hover:-translate-y-0.5 hover:-translate-x-0.5
    transition-all duration-200
  `,
  
  secondary: `
    bg-toxic-purple/40 border border-toxic-pink text-white 
    shadow-soft-glow-purple 
    hover:bg-toxic-purple/50 hover:shadow-glow-purple
    hover:text-soft-toxic-purple
    transition-all duration-300
  `,
};

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
