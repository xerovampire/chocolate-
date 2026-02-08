import React from 'react';
import { THEME } from '../constants';

interface ButtonProps {
  onClick: () => void;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${THEME.button} 
        text-white 
        font-medium 
        text-xl 
        px-12 
        py-3 
        rounded-full 
        ${THEME.buttonShadow}
        active:shadow-none 
        active:translate-y-1 
        transition-all 
        duration-150
        z-10
      `}
    >
      {text}
    </button>
  );
};

export default Button;