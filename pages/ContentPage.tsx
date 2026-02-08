import React from 'react';
import { THEME, ASSETS } from '../constants';
import Button from '../components/Button';

interface ContentPageProps {
  title: string;
  imageSrc: string;
  onNext: () => void;
  btnText?: string;
}

const ContentPage: React.FC<ContentPageProps> = ({ title, imageSrc, onNext, btnText = "Next" }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full z-10 relative space-y-8">
      
      {/* Title */}
      <h1 className={`${THEME.text} font-cursive text-7xl md:text-8xl text-center leading-tight drop-shadow-sm z-10`}>
        {title}
      </h1>

      {/* Image Container with Corner Hearts */}
      <div className="relative p-2 bg-white/40 rounded-[2rem] shadow-sm backdrop-blur-sm">
         <img 
            src={imageSrc} 
            alt={title}
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-[1.5rem] shadow-inner relative z-10"
         />

         {/* --- Top Left Cluster (Big + Small) --- */}
         {/* Big Heart */}
         <div className="absolute -top-16 -left-12 z-20 animate-float" style={{ animationDelay: '0s' }}>
            <img src={ASSETS.hearts} className="w-32 h-auto -rotate-12 opacity-90 drop-shadow-sm" alt="" />
         </div>
         {/* Small Heart - scattered to the left */}
         <div className="absolute -top-4 -left-20 z-10 animate-float" style={{ animationDelay: '1.5s', animationDuration: '8s' }}>
            <img src={ASSETS.hearts} className="w-20 h-auto -rotate-45 opacity-80" alt="" />
         </div>

         {/* --- Top Right Cluster (Big + Small) --- */}
         {/* Big Heart */}
         <div className="absolute -top-16 -right-12 z-20 animate-float" style={{ animationDelay: '0.5s' }}>
            <img src={ASSETS.hearts} className="w-28 h-auto rotate-12 opacity-90 drop-shadow-sm" alt="" />
         </div>
         {/* Small Heart - scattered above */}
         <div className="absolute -top-24 right-10 z-10 animate-float" style={{ animationDelay: '2s', animationDuration: '7s' }}>
            <img src={ASSETS.hearts} className="w-16 h-auto -rotate-6 opacity-80" alt="" />
         </div>

         {/* --- Bottom Left Cluster (Big + Small) --- */}
         {/* Big Heart */}
         <div className="absolute -bottom-16 -left-14 z-20 animate-float" style={{ animationDelay: '1s' }}>
            <img src={ASSETS.hearts} className="w-28 h-auto rotate-45 opacity-90 drop-shadow-sm" alt="" />
         </div>
         {/* Small Heart - scattered lower left */}
         <div className="absolute bottom-6 -left-24 z-10 animate-float" style={{ animationDelay: '2.5s', animationDuration: '7.5s' }}>
            <img src={ASSETS.hearts} className="w-16 h-auto rotate-12 opacity-80" alt="" />
         </div>

         {/* --- Bottom Right Cluster (Big + Small) --- */}
         {/* Big Heart */}
         <div className="absolute -bottom-16 -right-14 z-20 animate-float" style={{ animationDelay: '0.2s' }}>
            <img src={ASSETS.hearts} className="w-32 h-auto -rotate-12 opacity-90 drop-shadow-sm" alt="" />
         </div>
         {/* Small Heart - scattered right */}
         <div className="absolute -bottom-10 -right-20 z-10 animate-float" style={{ animationDelay: '1.8s', animationDuration: '8.5s' }}>
            <img src={ASSETS.hearts} className="w-20 h-auto rotate-45 opacity-80" alt="" />
         </div>

      </div>

      {/* Button */}
      <div className="pt-4 z-10">
         <Button onClick={onNext} text={btnText} />
      </div>

    </div>
  );
};

export default ContentPage;