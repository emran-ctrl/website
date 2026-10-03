import { Server } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Multi-Node K8s Cluster',
    description:
      'Bare-metal Kubernetes cluster configuration utilizing Flannel CNI over Multipass VMs for localized infrastructure testing.',
    tags: ['Kubernetes', 'Linux', 'Networking'],
    link: '#'
  },
  {
    title: 'berbir',
    description:
      'Rust-based web vulnerability scanner with a Nuclei-style template engine, Axum API, SQLite persistence, and a live WASM dashboard.',
    tags: ['Rust', 'Security', 'Axum', 'WebAssembly'],
    link: 'https://github.com/emran-ctrl/berbir'
  }
];

export default function Projects() {
  return (
    <section>
      <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black mb-8 sm:mb-12 flex items-center gap-2 sm:gap-4 leading-tight break-words">
        <span className="text-[#cbd45f]">#</span> PROJECTS
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10">
        {PROJECTS.map((project, idx) => (
          <div key={idx} className="group flex flex-col bg-[#0d0e07] border-2 border-[#cbd45f] shadow-[4px_4px_0px_0px_rgba(203,212,95,1)] hover:-translate-y-2 hover:shadow-[6px_6px_0px_0px_rgba(203,212,95,1)] transition-all duration-300">
            <div className="h-36 sm:h-48 border-b border-[#cbd45f] bg-[#aab53c]/5 flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#cbd45f_2px,#cbd45f_4px)] pointer-events-none" />
              <Server size={48} className="sm:size-16 text-[#cbd45f] group-hover:scale-125 transition-transform duration-500" />
            </div>
            <div className="p-5 sm:p-6 flex-grow flex flex-col">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 uppercase">{project.title}</h3>
              <p className="text-[#d6daae] text-sm sm:text-base flex-grow mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] sm:text-xs font-bold bg-[#101208] border border-[#aab53c] px-2 py-1 uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-transparent border border-[#aab53c] text-[#aab53c] font-bold uppercase hover:bg-[#aab53c] hover:text-[#101208] transition-colors flex justify-center items-center gap-2 min-h-[48px]"
              >
                SOURCE
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
