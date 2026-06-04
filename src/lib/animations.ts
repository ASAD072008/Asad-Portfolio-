export const premiumSpring = { type: "spring", mass: 0.6, stiffness: 140, damping: 12 };
export const bouncierSpring = { type: "spring", mass: 0.8, stiffness: 160, damping: 10 };

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

export const staggerItem = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: premiumSpring }
};
