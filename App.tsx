import React, { useState } from 'react';
import { ASSETS, THEME } from './constants';
import WelcomePage from './pages/WelcomePage';
import ContentPage from './pages/ContentPage';
import EndingPage from './pages/EndingPage';

const App: React.FC = () => {
  const [step, setStep] = useState<number>(0);

  const nextStep = () => {
    setStep((prev) => (prev + 1) % 6); // Loop back to 0 after last page (index 5)
  };

  const renderContent = () => {
    switch (step) {
      case 0:
        return <WelcomePage onNext={nextStep} />;
      case 1:
        return (
          <ContentPage 
            title="Happy" 
            imageSrc={ASSETS.page2} 
            onNext={nextStep} 
          />
        );
      case 2:
        return (
          <ContentPage 
            title="Chocolate" 
            imageSrc={ASSETS.page3} 
            onNext={nextStep} 
          />
        );
      case 3:
        return (
          <ContentPage 
            title="Day" 
            imageSrc={ASSETS.page4} 
            onNext={nextStep} 
          />
        );
      case 4:
        return (
          <ContentPage 
            title="Baby" 
            imageSrc={ASSETS.page5} 
            onNext={nextStep} 
            // Removed custom btnText so it defaults to "Next"
          />
        );
      case 5:
        return <EndingPage onRestart={nextStep} />;
      default:
        return <WelcomePage onNext={nextStep} />;
    }
  };

  return (
    <div className={`w-full h-screen ${THEME.bg} overflow-hidden relative flex flex-col`}>
      {/* Main Content Area */}
      <main className="flex-grow w-full h-full relative flex items-center justify-center p-4">
        {/* Animated Wrapper for Page Transitions */}
        <div key={step} className="w-full h-full flex items-center justify-center animate-page-enter">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;