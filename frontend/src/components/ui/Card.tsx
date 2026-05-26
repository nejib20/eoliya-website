import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

export interface CardProps {
  variant?: 'default' | 'service' | 'project';
  children: React.ReactNode;
  icon?: LucideIcon;
  title?: string;
  description?: string;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  children,
  icon: Icon,
  title,
  description,
  className = '',
  href,
  onClick,
}) => {
  const variantClasses = {
    default: 'card',
    service: 'card-service',
    project: 'card',
  };

  const combinedClasses = [
    variantClasses[variant],
    className,
    (href || onClick) ? 'cursor-pointer' : '',
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {variant === 'service' && Icon && (
        <div className="w-16 h-16 mx-auto mb-4 bg-primary-50 rounded-2xl flex items-center justify-center">
          <Icon className="w-8 h-8 text-primary-500" />
        </div>
      )}
      {title && (
        <h3 className="text-xl font-semibold mb-3 text-secondary-500">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-gray-600 mb-4">
          {description}
        </p>
      )}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClasses}
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        {content}
      </motion.a>
    );
  }

  if (onClick) {
    return (
      <motion.div
        className={combinedClasses}
        onClick={onClick}
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        {content}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={combinedClasses}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {content}
    </motion.div>
  );
};

export default Card;
