import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="mx-auto max-w-4xl bg-[#29292a] border border-[#0ff4c6] border-opacity-30 rounded-lg px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
        <p className="text-sm text-[#f8f8f8] text-center sm:text-left">
          Ми використовуємо cookies для аналітики. Детальніше у{' '}
          <Link to="/cookie-policy" className="text-[#0ff4c6] underline hover:no-underline">
            політиці cookies
          </Link>.
        </p>
        <div className="flex gap-3 shrink-0">
          <button onClick={handleDecline} className="btn border border-[#f8f8f8] border-opacity-30 text-[#f8f8f8] hover:border-opacity-60 py-2 px-4 text-sm">
            Відхилити
          </button>
          <button onClick={handleAccept} className="btn btn-primary py-2 px-4 text-sm">
            Прийняти
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
