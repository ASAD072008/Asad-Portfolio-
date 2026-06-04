import React, { useRef, useState, MouseEvent } from 'react';
import { motion } from 'motion/react';
import { premiumSpring } from '../../lib/animations';

export function Magnetic({ children, className = '', strength = 0.3 }: { children: React.ReactNode, className?: string, strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const boundingRect = ref.current?.getBoundingClientRect();
    if (boundingRect) {
      const { height, width, left, top } = boundingRect;
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      setPosition({ x: middleX * strength, y: middleY * strength });
    }
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={premiumSpring}
      className={`inline-block w-fit ${className}`}
    >
      {children}
    </motion.div>
  );
}
