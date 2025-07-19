import { motion } from 'framer-motion';
import type { AnimationProps } from '../types';

export const AnimatedSection: React.FC<AnimationProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration,
        delay,
        ease: [0.6, -0.05, 0.01, 0.99],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedCard: React.FC<AnimationProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
      className={`card ${className}`}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedButton: React.FC<AnimationProps & {
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}> = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  className = '',
}) => {
  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      onClick={onClick}
      disabled={disabled}
      className={`btn-${variant} ${className}`}
      style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
    >
      {children}
    </motion.button>
  );
}; 