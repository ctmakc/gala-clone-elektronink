import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="claim" className="container bg-black p-8 md:px-20 md:py-20 mt-20 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center">
      <h2 className="text-white text-4xl md:text-5xl tracking-tight font-bold">
        За гроші — так
      </h2>
      <p className="text-slate-400 mt-4 text-lg md:text-xl">
        Так, я можу складніші сценарії та інтеграції. Будь-який каприз за ваші гроші.
      </p>
      <div className="flex mt-5">
        <a href="/contact" className="btn btn-white text-black border-2 border-transparent">
          Написати Галі
        </a>
      </div>
    </section>
  );
};

export default CTA;
