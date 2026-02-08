import React from 'react';
import { THEME } from '../constants';
import Button from '../components/Button';
import FloatingHearts from '../components/FloatingHearts';

interface WelcomePageProps {
  onNext: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onNext }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full z-10 relative space-y-16">
      {/* Background Hearts specifically for Welcome Page */}
      <FloatingHearts />

      <div className="flex flex-col items-center z-10">
        <h1 className={`${THEME.text} font-cursive text-7xl md:text-8xl text-center leading-tight drop-shadow-sm`}>
          welcome
        </h1>
        <div className="flex items-center gap-4">
          <h1 className={`${THEME.text} font-cursive text-7xl md:text-8xl text-center leading-tight drop-shadow-sm`}>
            baby
          </h1>
          {/* Simple Pink Bow Representation */}
          <span className="text-6xl md:text-7xl drop-shadow-md transform -rotate-12">
            🎀
          </span>
        </div>
      </div>
      
      <Button onClick={onNext} text="Continue" />
    </div>
  );
};

export default WelcomePage;