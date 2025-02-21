//Users/inside_machine/Documents/Malahat Nation /MICO_web/mico-website/src/components/ui/Container.tsx
'use client'; 

import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  fluid?: boolean;
  as?: React.ElementType;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  fluid = false,
  as: Component = 'div',
}) => {
  return (
    <Component
      className={`
        ${fluid ? 'w-full' : 'max-w-7xl mx-auto'}
        px-4 sm:px-6 lg:px-8
        ${className}
      `}
    >
      {children}
    </Component>
  );
};

export default Container;
