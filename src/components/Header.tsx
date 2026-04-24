import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="container flex flex-col lg:flex-row justify-between items-center my-5">
      <div className="flex w-full lg:w-auto items-center justify-between">
        <Link to="/" className="flex items-center text-lg rounded">
          <img src="/_astro/logo.svg" alt="Гала – OSINT агенція" width="64" height="64" />
          <span className="text-[20px] font-bold pl-3 text-white">Гала</span>
        </Link>
        <div className="block lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu" className="text-white">
            <svg fill="currentColor" className="w-4 h-4" width="24" height="24" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"></path>
            </svg>
          </button>
        </div>
      </div>
      <nav className={`w-full lg:w-auto mt-2 lg:flex lg:mt-0 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col lg:flex-row lg:gap-3">
          <li><Link to="/price" className="flex lg:px-3 py-2 items-center text-slate-400 hover:text-white">Розцінки</Link></li>
          <li><Link to="/legal" className="flex lg:px-3 py-2 items-center text-slate-400 hover:text-white">Легальність</Link></li>
          <li><Link to="/blog" className="flex lg:px-3 py-2 items-center text-slate-400 hover:text-white">Блог</Link></li>
          <li><Link to="/contact" className="flex lg:px-3 py-2 items-center text-slate-400 hover:text-white">Контакти</Link></li>
        </ul>
      </nav>
      <div className="hidden lg:flex gap-4 items-center">
        <button className="btn btn-outline py-2 px-4 text-sm">Реєстрація</button>
        <button className="btn btn-primary py-2 px-4 text-sm">Вхід</button>
      </div>
    </header>
  );
};

export default Header;
