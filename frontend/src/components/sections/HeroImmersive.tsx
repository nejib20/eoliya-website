'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Lightbulb, Settings } from 'lucide-react';
import { Button } from '@/components/ui';

interface HeroImmersiveProps {
  title: string;
  subtitle: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Architectural wireframe building SVG
const ArchitecturalVisual = () => (
  <div className="relative w-full h-full">
    {/* Grid background */}
    <svg
      className="absolute inset-0 w-full h-full opacity-20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-primary-300"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>

    {/* Animated architectural building */}
    <svg
      viewBox="0 0 400 300"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Building wireframe - left side (blueprint style) */}
      <g className="text-primary-400">
        {/* Main building structure */}
        <motion.path
          d="M 50 250 L 50 100 L 150 60 L 150 250 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        {/* Floor lines */}
        {[100, 130, 160, 190, 220].map((y, i) => (
          <motion.line
            key={i}
            x1="50"
            y1={y}
            x2="150"
            y2={y - (i === 0 ? 40 : 0)}
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="2 2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.5 + i * 0.1 }}
          />
        ))}
        {/* Windows wireframe */}
        {[0, 1, 2].map((row) =>
          [0, 1, 2].map((col) => (
            <motion.rect
              key={`${row}-${col}`}
              x={60 + col * 25}
              y={110 + row * 40}
              width="15"
              height="25"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.5, scale: 1 }}
              transition={{ delay: 1 + (row * 3 + col) * 0.05 }}
            />
          ))
        )}
      </g>

      {/* Building rendered - right side (3D style) */}
      <g>
        {/* Main building - front face */}
        <motion.path
          d="M 200 250 L 200 90 L 300 50 L 300 250 Z"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <animate
            attributeName="fill"
            values="#0066CC20;#0066CC40;#0066CC20"
            dur="4s"
            repeatCount="indefinite"
          />
        </motion.path>

        {/* Building side face */}
        <motion.path
          d="M 300 50 L 350 70 L 350 250 L 300 250 Z"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.7 }}
        >
          <animate
            attributeName="fill"
            values="#1E3A5F30;#1E3A5F50;#1E3A5F30"
            dur="4s"
            repeatCount="indefinite"
          />
        </motion.path>

        {/* Roof */}
        <motion.path
          d="M 200 90 L 250 70 L 350 70 L 300 50 Z"
          fill="#0066CC"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        />

        {/* Glowing windows */}
        {[0, 1, 2, 3].map((row) =>
          [0, 1, 2].map((col) => (
            <motion.rect
              key={`win-${row}-${col}`}
              x={215 + col * 25}
              y={105 + row * 35}
              width="15"
              height="22"
              rx="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{
                duration: 2,
                delay: 2.5 + (row * 3 + col) * 0.1,
                repeat: Infinity,
                repeatDelay: Math.random() * 2,
              }}
              fill="#F5A623"
            />
          ))
        )}

        {/* Side windows */}
        {[0, 1, 2, 3].map((row) => (
          <motion.rect
            key={`side-${row}`}
            x={310}
            y={100 + row * 35}
            width="20"
            height="22"
            rx="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{
              duration: 2.5,
              delay: 2.8 + row * 0.15,
              repeat: Infinity,
            }}
            fill="#F5A62380"
          />
        ))}
      </g>

      {/* Connection lines between wireframe and render */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <line
          x1="150"
          y1="60"
          x2="200"
          y2="90"
          stroke="#0066CC"
          strokeWidth="0.5"
          strokeDasharray="4 4"
          opacity="0.4"
        />
        <line
          x1="150"
          y1="250"
          x2="200"
          y2="250"
          stroke="#0066CC"
          strokeWidth="0.5"
          strokeDasharray="4 4"
          opacity="0.4"
        />
      </motion.g>

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.circle
          key={i}
          cx={100 + Math.random() * 200}
          cy={80 + Math.random() * 150}
          r="2"
          fill="#0066CC"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
            y: [0, -30],
          }}
          transition={{
            duration: 3,
            delay: 3 + i * 0.3,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />
      ))}
    </svg>

    {/* Gradient overlays */}
    <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white/50 pointer-events-none" />
    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />
  </div>
);

export const HeroImmersive: React.FC<HeroImmersiveProps> = ({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50/30">
      {/* Background architectural visual */}
      <div className="absolute inset-0 lg:left-1/3">
        <ArchitecturalVisual />
      </div>

      {/* Animated accent shapes */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />

      <div className="container-custom relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100/80 backdrop-blur-sm rounded-full text-primary-600 text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
            Bureau d'études et conseil en ingénierie du bâtiment
          </motion.div>

          {/* Main content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-500 mb-6 leading-tight"
            >
              {title}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed"
            >
              {subtitle}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              {primaryCta && (
                <Button
                  href={primaryCta.href}
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                >
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button
                  href={secondaryCta.href}
                  variant="secondary"
                  size="lg"
                >
                  {secondaryCta.label}
                </Button>
              )}
            </motion.div>

            {/* Key features */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary-500" />
                </div>
                <span className="text-sm font-medium">150+ projets réalisés</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-primary-500" />
                </div>
                <span className="text-sm font-medium">80% d'économies LED</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Settings className="w-5 h-5 text-primary-500" />
                </div>
                <span className="text-sm font-medium">15 ans d'expertise</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-3 bg-primary-500 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroImmersive;
