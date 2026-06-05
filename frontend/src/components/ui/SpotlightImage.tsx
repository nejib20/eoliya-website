'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';

interface SpotlightImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  className?: string;
  containerClassName?: string;
  spotlightSize?: number; // Size of spotlight in pixels
  spotlightIntensity?: number; // 0-1, how bright the spotlight is
}

export const SpotlightImage: React.FC<SpotlightImageProps> = ({
  src,
  alt,
  fill = false,
  width,
  height,
  sizes,
  className = '',
  containerClassName = '',
  spotlightSize = 300,
  spotlightIntensity = 0.35,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${containerClassName}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Base image */}
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover ${className}`}
          sizes={sizes}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          sizes={sizes}
        />
      )}

      {/* Spotlight overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(circle ${spotlightSize}px at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(255, 255, 255, ${spotlightIntensity}) 0%,
            rgba(255, 255, 255, ${spotlightIntensity * 0.5}) 30%,
            rgba(0, 0, 0, 0) 70%)`,
        }}
      />

      {/* Subtle vignette on hover for depth */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          opacity: isHovering ? 0.15 : 0,
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0, 0, 0, 0.4) 100%)',
        }}
      />
    </div>
  );
};

export default SpotlightImage;
