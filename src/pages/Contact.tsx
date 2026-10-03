import { Send, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section className="border-2 border-[#aab53c] p-5 sm:p-8 md:p-12 shadow-[6px_6px_0px_0px_rgba(170,181,60,1)] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0d0e07] to-[#101208]">
      <div className="max-w-2xl mx-auto text-center space-y-6 sm:space-y-8">
        <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#cbd45f] leading-tight break-words">Transmission Link</h2>
        <p className="text-[#d6daae] text-sm sm:text-base">Ready to deploy? Send a direct packet to my terminal.</p>

        <form className="space-y-5 sm:space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-xs sm:text-sm font-bold uppercase">{'>> USER_ID'}</label>
            <input
              type="text"
              className="w-full bg-[#0d0e07] border border-[#aab53c] p-3 sm:p-4 text-[#aab53c] focus:outline-none focus:border-[#cbd45f] focus:shadow-[2px_2px_0px_0px_rgba(203,212,95,1)] transition-all font-mono placeholder:text-[#4d512f]"
              placeholder="ENTER NAME..."
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs sm:text-sm font-bold uppercase">{'>> RETURN_ADDRESS'}</label>
            <input
              type="email"
              className="w-full bg-[#0d0e07] border border-[#aab53c] p-3 sm:p-4 text-[#aab53c] focus:outline-none focus:border-[#cbd45f] focus:shadow-[2px_2px_0px_0px_rgba(203,212,95,1)] transition-all font-mono placeholder:text-[#4d512f]"
              placeholder="ENTER EMAIL..."
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs sm:text-sm font-bold uppercase">{'>> PAYLOAD'}</label>
            <textarea
              rows={4}
              className="w-full bg-[#0d0e07] border border-[#aab53c] p-3 sm:p-4 text-[#aab53c] focus:outline-none focus:border-[#cbd45f] focus:shadow-[2px_2px_0px_0px_rgba(203,212,95,1)] transition-all font-mono placeholder:text-[#4d512f] resize-none"
              placeholder="WRITE MESSAGE..."
            />
          </div>
          <button className="w-full bg-[#cbd45f] text-[#101208] border-2 border-[#cbd45f] py-3 sm:py-4 font-black uppercase text-lg sm:text-xl shadow-[3px_3px_0px_0px_rgba(170,181,60,0.5)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_0px_0px_rgba(170,181,60,0.5)] active:translate-y-1 active:translate-x-1 active:shadow-none transition-all flex justify-center items-center gap-3 min-h-[48px]">
            <Send size={20} className="sm:size-6" />
            SUBMIT_QUEST
          </button>
        </form>

        <div className="pt-8 sm:pt-12 border-t border-[#aab53c]/30 flex flex-wrap justify-center gap-4 sm:gap-8">
          <a href="#" aria-label="GitHub" className="p-3 sm:p-4 border border-[#aab53c] hover:bg-[#aab53c] hover:text-[#0d0e07] transition-colors shadow-[2px_2px_0px_0px_rgba(170,181,60,1)] min-h-[44px] min-w-[44px] inline-flex items-center justify-center">
            <Github size={20} className="sm:size-6 md:size-7" />
          </a>
          <a href="#" aria-label="LinkedIn" className="p-3 sm:p-4 border border-[#aab53c] hover:bg-[#aab53c] hover:text-[#0d0e07] transition-colors shadow-[2px_2px_0px_0px_rgba(170,181,60,1)] min-h-[44px] min-w-[44px] inline-flex items-center justify-center">
            <Linkedin size={20} className="sm:size-6 md:size-7" />
          </a>
          <a href="#" aria-label="Twitter" className="p-3 sm:p-4 border border-[#aab53c] hover:bg-[#aab53c] hover:text-[#0d0e07] transition-colors shadow-[2px_2px_0px_0px_rgba(170,181,60,1)] min-h-[44px] min-w-[44px] inline-flex items-center justify-center">
            <Twitter size={20} className="sm:size-6 md:size-7" />
          </a>
        </div>
      </div>
    </section>
  );
}
