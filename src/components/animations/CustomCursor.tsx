import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only enable on devices that support hover (non-touch)
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return;
    }
    
    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.interactive-element') ||
        target.classList.contains('cursor-expand')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {isVisible && (
        <style>
          {`
            body {
              cursor: none;
            }
            a, button, input, textarea {
              cursor: none;
            }
          `}
        </style>
      )}
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-cyan-500/50 pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.3)]"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
          }}
          animate={{
            scale: isHovering ? 2 : 1,
            backgroundColor: isHovering ? 'rgba(6, 182, 212, 0.2)' : 'transparent',
            borderWidth: isHovering ? '1px' : '2px'
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <motion.div 
            className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
            animate={{
              opacity: isHovering ? 0 : 1,
              scale: isHovering ? 0 : 1
            }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
      )}
    </>
  );
}
