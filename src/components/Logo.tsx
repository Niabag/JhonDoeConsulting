import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Fond dégradé */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
          <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#EF4444" />
          </linearGradient>
        </defs>
        
        {/* Cercle principal */}
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="url(#logoGradient)"
          stroke="white"
          strokeWidth="2"
        />
        
        {/* Initiales JD stylisées */}
        <g transform="translate(20, 25)">
          {/* J */}
          <path
            d="M8 5 L8 25 Q8 35 18 35 Q28 35 28 25 L28 20"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="8" cy="5" r="2" fill="white" />
          
          {/* D */}
          <path
            d="M35 5 L35 35 L45 35 Q55 35 55 20 Q55 5 45 5 L35 5"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
        
        {/* Éléments décoratifs représentant les secteurs */}
        {/* BTP - Forme de bâtiment */}
        <rect
          x="15"
          y="70"
          width="8"
          height="12"
          fill="url(#accentGradient)"
          rx="1"
        />
        
        {/* Digital - Pixel */}
        <rect
          x="77"
          y="70"
          width="8"
          height="8"
          fill="url(#accentGradient)"
          rx="1"
        />
        
        {/* Immobilier - Maison */}
        <path
          d="M30 82 L35 77 L40 82 L40 85 L30 85 Z"
          fill="url(#accentGradient)"
        />
        
        {/* Musique - Note */}
        <circle cx="65" cy="78" r="3" fill="url(#accentGradient)" />
        <rect x="68" y="68" width="2" height="10" fill="url(#accentGradient)" />
        
        {/* Lignes de connexion subtiles */}
        <path
          d="M25 15 Q50 10 75 15"
          stroke="white"
          strokeWidth="1"
          strokeOpacity="0.3"
          fill="none"
        />
        <path
          d="M15 50 Q50 45 85 50"
          stroke="white"
          strokeWidth="1"
          strokeOpacity="0.3"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default Logo;