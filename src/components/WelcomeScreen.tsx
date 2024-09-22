import React from 'react';
import LanguageSelector from './LanguageSelector.tsx';
import HelpButton from './HelpButton.tsx';
import { Link } from 'react-router-dom';

 function WelcomeScreen () {
  return (
    <main className="flex overflow-hidden flex-col justify-center px-11 py-11 bg-blend-normal bg-zinc-100 max-md:px-5">
      <section className="flex flex-col py-9 pl-10 w-full bg-white rounded-[45px] max-md:pl-5 max-md:max-w-full">
        <div className="w-full max-w-[1132px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-center w-full max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-wrap gap-5 justify-between self-stretch w-full max-md:max-w-full">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad64532726f096aab4a29fb217f995260d1549fc40fd32aa9131270efadd34c8?apiKey=42f0ae13fb764945a92eb1f4d77f493b&" alt="Lenox Hill Imaging Center logo" className="object-contain aspect-[5.68] w-[262px]" />
                  <LanguageSelector />
                </div>
                <h1 className="mt-80 text-8xl font-light tracking-tighter leading-none text-center text-black max-md:mt-10 max-md:text-4xl">
                  Welcome
                </h1>
                <h2 className="mt-10 text-4xl tracking-wide leading-none text-center text-stone-500 max-md:max-w-full">
                  to Lenox Hill Imaging Center
                </h2>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
              <p className="mt-80 text-6xl font-light tracking-tight text-center text-white leading-[72px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
                Empowering breakthroughs in care delivery
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 justify-between items-start self-end mt-20 mr-0 w-full max-w-[1181px] max-md:mt-10 max-md:max-w-full">
          <p className="self-start text-5xl text-center text-fuchsia-800 leading-[56px] max-md:text-4xl max-md:leading-[52px]">
            Touch anywhere to begin Express Check-In
            <Link to="/dashboard">Go to Next page</Link>
          </p>
          <HelpButton />
        </div>
      </section>
    </main>
  );
};

export default WelcomeScreen;