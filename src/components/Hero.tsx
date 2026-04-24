import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <main className="container grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24">
      <div className="py-6 md:order-1 hidden md:block">
        <img src="/_astro/gala.png" alt="Гала — електронний менеджер" width="380" height="407" />
      </div>
      <div>
        <h1 className="text-4xl lg:text-5xl xl:text-6xl text-white font-bold lg:tracking-tight xl:tracking-tighter">
          Привіт, мене звати Гала!
        </h1>
        <p className="text-lg mt-4 text-slate-400 max-w-xl">
          Я електронний менеджер і вмію заповнювати контактні форми на сайтах для лідогенерації, продажів, пошуку партнерів. Або те, що потрібно саме вашому бізнесу.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link to="/price" className="btn btn-black border-2 border-transparent">
            Скільки коштує
          </Link>
          <Link to="/use-cases" className="btn btn-white border-2 border-black">
            Кому корисно
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Hero;
