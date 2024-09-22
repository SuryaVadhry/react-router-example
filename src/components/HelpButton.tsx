import React from 'react';

const HelpButton: React.FC = () => {
  return (
    <div className="flex flex-col self-end mt-28 max-md:mt-10">
      <div className="flex flex-col justify-center items-center self-end px-5 bg-white h-[89px] rounded-[44px] w-[89px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/940fee4d96e2ceb1db18797cd3e98b63b547bdb88d54aefe0066709448ee87db?apiKey=42f0ae13fb764945a92eb1f4d77f493b&" alt="Help icon" className="object-contain w-full aspect-[1.05]" />
      </div>
      <button className="flex overflow-hidden items-center self-start mt-3 text-base font-medium leading-7 capitalize whitespace-nowrap shadow-md bg-neutral-200 rounded-[100px] text-black text-opacity-90">
        <div className="flex overflow-hidden gap-2 items-center self-stretch px-4 py-3 my-auto rounded-[100px]">
          <span className="self-stretch my-auto">Help</span>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/669b202b5e0c3b4c05ab79cfd521b11ac46e3a0de3820ff7693788c5f86fe521?apiKey=42f0ae13fb764945a92eb1f4d77f493b&" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
        </div>
      </button>
    </div>
  );
};

export default HelpButton;