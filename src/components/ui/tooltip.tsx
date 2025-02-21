// src/components/ui/tooltip.tsx
'use client';

import * as React from 'react';
import { useState, useRef } from 'react';

interface TooltipProps {
  children: React.ReactNode;
  content: string;
}

export function Tooltip({ children, content }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      {isVisible && (
        <div
          ref={tooltipRef}
          className="absolute z-50 px-2 py-1 text-xs text-white bg-gray-900 rounded-md -top-8 left-1/2 transform -translate-x-1/2"
        >
          {content}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900" />
        </div>
      )}
    </div>
  );
}