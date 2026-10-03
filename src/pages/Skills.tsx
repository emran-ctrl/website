import { Code2, Box, TerminalSquare, Shield } from 'lucide-react';

const SKILLS = [
  { name: 'Go (Golang)', level: 4, icon: <Code2 size={24} /> },
  { name: 'Kubernetes', level: 3, icon: <Box size={24} /> },
  { name: 'Docker / OCI', level: 4, icon: <Box size={24} /> },
  { name: 'Linux', level: 5, icon: <TerminalSquare size={24} /> },
  { name: 'Web Security', level: 4, icon: <Shield size={24} /> }
];

export default function Skills() {
  return (
    <section>
      <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black mb-8 sm:mb-12 flex items-center gap-2 sm:gap-4 leading-tight break-words">
        <span className="text-[#cbd45f]">#</span> TECH_SKILLS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {SKILLS.map((skill, idx) => (
          <div key={idx} className="bg-[#0d0e07] border border-[#aab53c] p-5 sm:p-6 shadow-[2px_2px_0px_0px_rgba(170,181,60,1)] hover:bg-[#aab53c]/10 transition-colors cursor-crosshair">
            <div className="flex items-center gap-3 sm:gap-4 mb-4">
              <div className="p-2 bg-[#aab53c] text-[#101208] border border-transparent">
                {skill.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold uppercase">{skill.name}</h3>
            </div>
            <div className="flex gap-1 sm:gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-2 w-full border border-[#aab53c] ${
                    i < (skill.level ?? 0) ? 'bg-[#cbd45f]' : 'bg-transparent'
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
