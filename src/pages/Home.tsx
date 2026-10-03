import { useState, useEffect } from 'react';
import { Terminal, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [heroText, setHeroText] = useState('');
  const fullText = "Hello World! I am Emran, a Systems Developer & Security Specialist.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setHeroText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-[60svh] flex flex-col justify-center items-start gap-6 sm:gap-8 pt-10">
      <div className="w-full md:w-3/4 bg-[#0d0e07] border-2 border-[#aab53c] p-4 sm:p-6 shadow-[4px_4px_0px_0px_rgba(170,181,60,1)]">
        <div className="flex gap-2 mb-4 border-b-2 border-[#aab53c] pb-2">
          <div className="w-3 h-3 bg-[#aab53c]" />
          <div className="w-3 h-3 bg-[#aab53c]" />
          <div className="w-3 h-3 bg-[#aab53c]" />
        </div>
        <p className="text-base sm:text-lg md:text-2xl xl:text-3xl font-bold leading-relaxed min-h-[5.25rem] sm:min-h-[6rem]">
          {'>'} {heroText}
          <span className="animate-pulse bg-[#cbd45f] text-[#cbd45f] ml-1">_</span>
        </p>
      </div>
      <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 sm:gap-6 mt-6 sm:mt-8">
        <button className="bg-transparent border-2 border-[#aab53c] text-[#aab53c] px-6 sm:px-8 py-3 text-base sm:text-lg font-bold shadow-[3px_3px_0px_0px_rgba(170,181,60,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_0px_0px_rgba(170,181,60,1)] active:translate-y-[1px] active:translate-x-[1px] transition-all flex items-center justify-center gap-2 min-h-[48px] w-full sm:w-auto">
          <Terminal size={20} />
          DOWNLOAD_CV.EXE
        </button>
        <Link to="/projects" className="bg-[#cbd45f] border-2 border-[#cbd45f] text-[#101208] px-6 sm:px-8 py-3 text-base sm:text-lg font-black shadow-[3px_3px_0px_0px_rgba(170,181,60,0.5)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_0px_0px_rgba(170,181,60,0.5)] active:translate-y-[1px] active:translate-x-[1px] transition-all flex items-center justify-center gap-2 min-h-[48px] w-full sm:w-auto">
          <Server size={20} />
          VIEW_INFRA
        </Link>
      </div>
    </section>
  );
}
