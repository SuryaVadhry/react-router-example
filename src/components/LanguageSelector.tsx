import React from 'react';

const LanguageSelector: React.FC = () => {
  return (
    <div className="flex gap-10 justify-between items-center self-start py-2.5 pr-3.5 pl-6 rounded-xl bg-zinc-100 min-w-[170px] max-md:pl-5">
      <span className="gap-2.5 self-stretch my-auto text-lg leading-none whitespace-nowrap text-neutral-500">
        English
      </span>
      <div className="flex gap-2.5 justify-center items-center self-stretch my-auto w-5">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b36ec144a1d8d94caad92c6ccd5d36d137219f03db4a914ec8057b1c66f090e3?apiKey=42f0ae13fb764945a92eb1f4d77f493b&" alt="" className="object-contain self-stretch my-auto w-5 aspect-square" />
      </div>
    </div>
  );
};

export default LanguageSelector;