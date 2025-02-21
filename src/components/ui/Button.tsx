//Users/inside_machine/Documents/Malahat Nation /MICO_web/mico-website/src/components/ui/Button.tsx
'use client'; 

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'link';
  className?: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  onClick,
  href,
  disabled = false,
}) => {
  const baseStyles =
    'inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold transition-all duration-300';

  const variants = {
    primary: 'bg-emerald-600 hover:bg-emerald-700 text-white',
    secondary: 'bg-blue-600 hover:bg-blue-700 text-white',
    outline:
      'border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50',
    link: 'text-emerald-600 hover:text-emerald-700 underline',
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed';

  const combinedStyles = `
    ${baseStyles}
    ${variants[variant]}
    ${disabled ? disabledStyles : ''}
    ${className}
  `;

  if (href) {
    return (
      <a href={href} className={combinedStyles} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={combinedStyles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
