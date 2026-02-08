import React from 'react';
import { ASSETS } from '../constants';

const FloatingHearts: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Top Left Cluster */}
      <div className="absolute top-10 left-4 animate-float" style={{ animationDelay: '0.5s' }}>
        <img
          src={ASSETS.hearts}
          alt="heart"
          className="w-24 h-auto -rotate-12 opacity-90 drop-shadow-md"
        />
      </div>
      <div className="absolute top-24 left-16 animate-float" style={{ animationDelay: '2s' }}>
        <img
          src={ASSETS.hearts}
          alt="heart"
          className="w-12 h-auto rotate-12 opacity-80"
        />
      </div>

      {/* Top Right Cluster */}
      <div className="absolute top-12 right-6 animate-float" style={{ animationDelay: '1s' }}>
        <img
          src={ASSETS.hearts}
          alt="heart"
          className="w-28 h-auto rotate-12 opacity-90 drop-shadow-md"
        />
      </div>
      <div className="absolute top-32 right-12 animate-float" style={{ animationDelay: '3s' }}>
        <img
          src={ASSETS.hearts}
          alt="heart"
          className="w-14 h-auto -rotate-6 opacity-80"
        />
      </div>

      {/* Bottom Left Cluster */}
      <div className="absolute bottom-32 left-8 animate-float" style={{ animationDelay: '1.5s' }}>
        <img
          src={ASSETS.hearts}
          alt="heart"
          className="w-28 h-auto rotate-12 opacity-90 drop-shadow-md"
        />
      </div>
      <div className="absolute bottom-20 left-20 animate-float" style={{ animationDelay: '0.2s' }}>
         <img
          src={ASSETS.hearts}
          alt="heart"
          className="w-14 h-auto -rotate-12 opacity-80"
        />
      </div>
      <div className="absolute bottom-48 left-4 animate-float" style={{ animationDelay: '4s' }}>
        <img
          src={ASSETS.hearts}
          alt="heart"
          className="w-16 h-auto -rotate-12 opacity-80"
        />
      </div>

      {/* Bottom Right Cluster */}
      <div className="absolute bottom-22 right-8 animate-float" style={{ animationDelay: '2.5s' }}>
        <img
          src={ASSETS.hearts}
          alt="heart"
          className="w-24 h-auto -rotate-12 opacity-90 drop-shadow-md"
        />
      </div>
      <div className="absolute bottom-38 right-16 animate-float" style={{ animationDelay: '1.2s' }}>
        <img
          src={ASSETS.hearts}
          alt="heart"
          className="w-16 h-auto rotate-6 opacity-80"
        />
      </div>
    </div>
  );
};

export default FloatingHearts;
