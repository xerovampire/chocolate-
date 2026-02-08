import React from 'react';
import { THEME } from '../constants';
import Button from '../components/Button';
import FloatingHearts from '../components/FloatingHearts';

interface EndingPageProps {
  onRestart: () => void;
}

const EndingPage: React.FC<EndingPageProps> = ({ onRestart }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full z-10 relative px-4 space-y-10">
      {/* Background Hearts */}
      <FloatingHearts />

      <div className="flex flex-col items-center z-10 max-w-3xl text-center space-y-6">
        <h1 className={`${THEME.text} font-cursive text-5xl md:text-7xl leading-tight drop-shadow-sm`}>
          Happy Chocolate 🍫<br /> Day Baby 🎀💗
        </h1>
        
        <p className={`${THEME.text} font-medium text-xl md:text-3xl leading-relaxed max-w-2xl opacity-90 font-cursive`}>
          To me you're the sweetest but you already know that. I wish mai khud tujhe dher saari chocolates gift kar pata or tujhe smile 😊 karte hue dekh pata. Hopefully vo din bhi ayega jldi.
        </p>

        <h2 className={`${THEME.text} font-cursive text-4xl md:text-6xl mt-4 drop-shadow-sm`}>
          I love you ♥️ baby.
        </h2>
      </div>
      
      <div className="pt-4 z-10">
        <Button onClick={onRestart} text="Again ↺" />
      </div>
    </div>
  );
};

export default EndingPage;