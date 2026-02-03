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
  const baseStyles = "px-3 py-1 text-16 font-semibold transition-all duration-300 hover:scale-105";
  
  const variantStyles = {
    primary: "bg-toxic-green/40 border-2 border-toxic-green text-white hover:bg-toxic-green/50 shadow-brand-glow ",
    secondary: "bg-toxic-purple/40 border-2 border-toxic-pink text-white hover:bg-toxic-purple/50"
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
