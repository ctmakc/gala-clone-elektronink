import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="container my-20">
      <p className="text-center text-sm text-white">
        Copyright © 2026 Гала. Всі права захищені.
      </p>
      <p className="text-center text-sm mt-4">
        <a href="mailto:support@elektronink.org.ua" className="text-slate-300 hover:text-white transition">
          support@elektronink.org.ua
        </a>
      </p>
      <p className="text-center text-sm mt-2">
        <Link to="/privacy-policy" className="text-slate-300 hover:text-white transition">
          Політика конфіденційності
        </Link>
        <Link to="/cookie-policy" className="text-slate-300 hover:text-white transition ml-2">
          Політика cookies
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
