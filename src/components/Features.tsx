import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="container mt-16 md:mt-0">
      <div className="mb-12">
        <h2 className="text-4xl text-white lg:text-5xl font-bold lg:tracking-tight">
          Гала може
        </h2>
        <p className="text-lg mt-4 text-slate-400">
          Гала вже вміє генерувати ліди, продавати і шукати партнерів. Вона не хворіє, доступна 24×7 і не йде у відпустку.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-16">
        <div className="flex gap-4 items-start rounded-lg">
          <div className="mt-1 rounded-full p-2 w-8 h-8 shrink-0 text-[#0ff4c6]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v3h20V8c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm5 10h-4v-2H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-8v2z"/>
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-white">Генерація лідів</h3>
            <p className="text-slate-500 mt-2 leading-relaxed">Гала автоматично знаходить потенційних клієнтів, заповнює контактні форми та збирає актуальні дані для вашої воронки продажів.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start rounded-lg">
          <div className="mt-1 rounded-full p-2 w-8 h-8 shrink-0 text-[#0ff4c6]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 10.975V8a2 2 0 0 0-2-2h-6V4.688c.305-.274.5-.668.5-1.11a1.5 1.5 0 0 0-3 0c0 .442.195.836.5 1.11V6H5a2 2 0 0 0-2 2v2.998l-.072.005A.999.999 0 0 0 2 12v2a1 1 0 0 0 1 1v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a1 1 0 0 0 1-1v-1.938a1.004 1.004 0 0 0-.072-.455c-.202-.488-.635-.605-.928-.632zM7 12c0-1.104.672-2 1.5-2s1.5.896 1.5 2s-.672 2-1.5 2S7 13.104 7 12zm8.998 6c-1.001-.003-7.997 0-7.998 0v-2s7.001-.002 8.002 0l-.004 2zm-.498-4c-.828 0-1.5-.896-1.5-2s.672-2 1.5-2s1.5.896 1.5 2s-.672 2-1.5 2z"/>
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-white">Автоматизовані продажі</h3>
            <p className="text-slate-500 mt-2 leading-relaxed">Надсилає персоналізовані пропозиції, відстежує відповіді та веде діалог з потенційними покупцями без вашої участі.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start rounded-lg">
          <div className="mt-1 rounded-full p-2 w-8 h-8 shrink-0 text-[#0ff4c6]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2S7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"/>
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-white">Пошук партнерів</h3>
            <p className="text-slate-500 mt-2 leading-relaxed">Знаходит релевантні компанії та організації, встановлює перший контакт і допомагає будувати ділові зв'язки по всьому світу.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
