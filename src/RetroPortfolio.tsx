import { useState, useEffect } from 'react';
import MouseCat from './MouseCat';
import {
  Terminal,
  Send,
  Github,
  Linkedin,
  Twitter,
  Server,
  Shield,
  Code2,
  Box,
  TerminalSquare
} from 'lucide-react';

// Natively embedded mock data reflecting a systems and infrastructure focus
const SKILLS = [
  { name: 'Go (Golang)', level: 4, icon: <Code2 size={24} /> },
  { name: 'Kubernetes', level: 3, icon: <Box size={24} /> },
  { name: 'Docker / OCI', level: 4, icon: <Box size={24} /> },
  { name: 'Linux', level: 5, icon: <TerminalSquare size={24} /> },
  { name: 'Web Security', level: 4, icon: <Shield size={24} /> }
];

const EXPERIENCE = [
  {
    role: 'Trusted Systems Developer',
    org: 'Information Network Security Administration',
    period: '2022 — 2025',
    tasks: [
      'Research, develop, and demo a secure kernel based off of seL4.',
      'Kernel / OS-level system demos covering interprocess communication, address space, and memory management.',
      'Low-level systems engineering with a focus on formal methods and trusted computing.'
    ]
  },
  {
    role: 'Cybersecurity Specialist',
    org: 'FULL-STACK SYSTEMS',
    period: '2025 — PRESENT',
    tasks: [
      'Conducted offensive security engagements: penetration testing, vulnerability assessment, and exploitation of web, network, and infrastructure targets.',
      'Authored detailed pentest reports documenting findings, impact, and remediation steps for clients and leadership.',
      'Suggested hardening implementations, including firewall rules, WAF configuration, and SAST integration into development pipelines.',
      'Built backend services using NestJS with Hasura for GraphQL APIs and database layer management.'
    ]
  }
];

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

export default function RetroPortfolio() {
  const [heroText, setHeroText] = useState('');
  const fullText = "Hello World! I am Emran, a Systems & Infrastructure Developer.";

  // Terminal typing effect
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
    <div className="min-h-screen bg-[#101208] text-[#aab53c] font-mono selection:bg-[#cbd45f] selection:text-[#101208]">

      {/* 1. HEADER / NAVBAR */}
      <nav className="fixed top-0 w-full bg-[#101208] border-b border-[#cbd45f] z-50 p-4 shadow-[0px_2px_0px_0px_rgba(203,212,95,0.5)]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-2xl font-bold tracking-widest uppercase">
            <span>Emran</span>
          </div>
          <div className="flex items-center gap-6 text-sm font-bold">
            <a href="#about" className="hover:text-[#e2e5bd] transition-colors">ABOUT</a>
            <a href="#experience" className="hover:text-[#e2e5bd] transition-colors">EXPERIENCE</a>
            <a href="#skills" className="hover:text-[#e2e5bd] transition-colors">SKILLS</a>
            <a href="#projects" className="hover:text-[#e2e5bd] transition-colors">PROJECTS</a>
            <a href="#contact" className="hover:text-[#e2e5bd] transition-colors">CONTACT</a>
            <button className="bg-[#aab53c] text-[#101208] px-4 py-2 uppercase font-black tracking-widest border border-[#aab53c] shadow-[2px_2px_0px_0px_rgba(203,212,95,1)] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[1px_1px_0px_0px_rgba(203,212,95,1)] active:translate-y-[2px] active:translate-x-[2px] active:shadow-none transition-all">
              Insert Coin
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 pt-32 pb-16 space-y-32">

        {/* 2. HERO SECTION */}
        <section className="min-h-[60vh] flex flex-col justify-center items-start gap-8 pt-10">
          <div className="w-full md:w-3/4 bg-[#0d0e07] border-2 border-[#aab53c] p-6 shadow-[4px_4px_0px_0px_rgba(170,181,60,1)]">
            <div className="flex gap-2 mb-4 border-b-2 border-[#aab53c] pb-2">
              <div className="w-3 h-3 bg-[#aab53c]" />
              <div className="w-3 h-3 bg-[#aab53c]" />
              <div className="w-3 h-3 bg-[#aab53c]" />
            </div>
            <p className="text-base sm:text-lg md:text-2xl xl:text-3xl font-bold leading-relaxed min-h-[5rem]">
              {'>'} {heroText}
              <span className="animate-pulse bg-[#cbd45f] text-[#cbd45f] ml-1">_</span>
            </p>
          </div>
          <div className="flex gap-6 mt-8">
            <button className="bg-transparent border-2 border-[#aab53c] text-[#aab53c] px-8 py-3 text-lg font-bold shadow-[3px_3px_0px_0px_rgba(170,181,60,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_0px_0px_rgba(170,181,60,1)] transition-all flex items-center gap-2">
              <Terminal size={20} />
              DOWNLOAD_CV.EXE
            </button>
            <a href="#projects" className="bg-[#cbd45f] border-2 border-[#cbd45f] text-[#101208] px-8 py-3 text-lg font-black shadow-[3px_3px_0px_0px_rgba(170,181,60,0.5)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_0px_0px_rgba(170,181,60,0.5)] transition-all flex items-center gap-2">
              <Server size={20} />
              VIEW_INFRA
            </a>
          </div>
        </section>

        {/* 3. ABOUT ME */}
        <section id="about" className="scroll-mt-32">
          <h2 className="text-4xl font-black mb-12 flex items-center gap-4">
            <span className="text-[#cbd45f]">#</span> CHARACTER_BIO
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="col-span-1 flex justify-center">
              <div className="w-64 h-64 border-2 border-dashed border-[#cbd45f] p-2 flex items-center justify-center bg-[#0d0e07]/50 shadow-[4px_4px_0px_0px_rgba(203,212,95,0.5)]">
                <div className="text-center space-y-4">
                  <p className="text-sm">AVATAR_MISSING.PNG</p>
                </div>
              </div>
            </div>
            <div className="col-span-2 bg-[#0d0e07] border-2 border-[#aab53c] p-8 shadow-[4px_4px_0px_0px_rgba(170,181,60,1)] space-y-4 text-lg leading-relaxed">
              <p>{'>'} STATUS: ONLINE</p>
              <p>{'>'} CLASS: SYSTEMS_DEV / SECURITY_SPECIALIST</p>
              <p className="text-[#d6daae] mt-4">
                I research and develop secure systems at the kernel and OS level, diving deep into low-level
                internals. On the offensive side, I run penetration testing engagements and suggest hardening
                implementations — firewall, WAF, and SAST pipelines. I also build backend applications with
                NestJS and Hasura, orchestrate Kubernetes clusters, and write tooling in Go and Rust.
              </p>
            </div>
          </div>
        </section>

        {/* 4. EXPERIENCE LOG */}
        <section id="experience" className="scroll-mt-32">
          <h2 className="text-4xl font-black mb-12 flex items-center gap-4">
            <span className="text-[#cbd45f]">#</span> EXPERIENCE_LOG
          </h2>
          <div className="space-y-8">
            {EXPERIENCE.map((job, idx) => (
              <div key={idx} className="bg-[#0d0e07] border-2 border-[#cbd45f] shadow-[4px_4px_0px_0px_rgba(203,212,95,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(203,212,95,1)] transition-all duration-300">
                <div className="flex flex-wrap justify-between items-center gap-4 border-b-2 border-[#cbd45f] bg-[#aab53c]/5 px-6 py-4">
                  <div>
                    <h3 className="text-2xl font-bold uppercase">{job.role}</h3>
                    <p className="text-sm text-[#8f9468] uppercase font-bold">{job.org}</p>
                  </div>
                  <span className="text-sm font-black bg-[#101208] border border-[#aab53c] px-3 py-1 uppercase">{job.period}</span>
                </div>
                <ul className="px-6 py-5 space-y-3 text-[#d6daae]">
                  {job.tasks.map(task => (
                    <li key={task} className="flex gap-3">
                      <span className="text-[#cbd45f] shrink-0">{'>'}</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 5. SKILLS MATRIX */}
        <section id="skills" className="scroll-mt-32">
          <h2 className="text-4xl font-black mb-12 flex items-center gap-4">
            <span className="text-[#cbd45f]">#</span> TECH_SKILLS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILLS.map((skill, idx) => (
              <div key={idx} className="bg-[#0d0e07] border border-[#aab53c] p-6 shadow-[2px_2px_0px_0px_rgba(170,181,60,1)] hover:bg-[#aab53c]/10 transition-colors cursor-crosshair">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-[#aab53c] text-[#101208] border border-transparent">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold uppercase">{skill.name}</h3>
                </div>
                
              </div>
            ))}
          </div>
        </section>

        {/* 5. PROJECTS SHOWCASE */}
        <section id="projects" className="scroll-mt-32">
          <h2 className="text-4xl font-black mb-12 flex items-center gap-4">
            <span className="text-[#cbd45f]">#</span> PROJECTS
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className="group flex flex-col bg-[#0d0e07] border-2 border-[#cbd45f] shadow-[4px_4px_0px_0px_rgba(203,212,95,1)] hover:-translate-y-2 hover:shadow-[6px_6px_0px_0px_rgba(203,212,95,1)] transition-all duration-300">
                <div className="h-48 border-b border-[#cbd45f] bg-[#aab53c]/5 flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#cbd45f_2px,#cbd45f_4px)] pointer-events-none" />
                  <Server size={64} className="text-[#cbd45f] group-hover:scale-125 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold mb-4 uppercase">{project.title}</h3>
                  <p className="text-[#d6daae] text-sm flex-grow mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-bold bg-[#101208] border border-[#aab53c] px-2 py-1 uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-transparent border border-[#aab53c] text-[#aab53c] font-bold uppercase hover:bg-[#aab53c] hover:text-[#101208] transition-colors flex justify-center items-center gap-2">
                    SOURCE
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. CONTACT SECTION */}
        <section id="contact" className="scroll-mt-32 border-2 border-[#aab53c] p-8 md:p-12 shadow-[6px_6px_0px_0px_rgba(170,181,60,1)] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0d0e07] to-[#101208]">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-black uppercase text-[#cbd45f]">Transmission Link</h2>
            <p className="text-[#d6daae]">Ready to deploy? Send a direct packet to my terminal.</p>

            <form className="space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase">{'>> USER_ID'}</label>
                <input
                  type="text"
                  className="w-full bg-[#0d0e07] border border-[#aab53c] p-4 text-[#aab53c] focus:outline-none focus:border-[#cbd45f] focus:shadow-[2px_2px_0px_0px_rgba(203,212,95,1)] transition-all font-mono placeholder:text-[#4d512f]"
                  placeholder="ENTER NAME..."
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase">{'>> RETURN_ADDRESS'}</label>
                <input
                  type="email"
                  className="w-full bg-[#0d0e07] border border-[#aab53c] p-4 text-[#aab53c] focus:outline-none focus:border-[#cbd45f] focus:shadow-[2px_2px_0px_0px_rgba(203,212,95,1)] transition-all font-mono placeholder:text-[#4d512f]"
                  placeholder="ENTER EMAIL..."
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase">{'>> PAYLOAD'}</label>
                <textarea
                  rows={4}
                  className="w-full bg-[#0d0e07] border border-[#aab53c] p-4 text-[#aab53c] focus:outline-none focus:border-[#cbd45f] focus:shadow-[2px_2px_0px_0px_rgba(203,212,95,1)] transition-all font-mono placeholder:text-[#4d512f] resize-none"
                  placeholder="WRITE MESSAGE..."
                />
              </div>
              <button className="w-full bg-[#cbd45f] text-[#101208] border-2 border-[#cbd45f] py-4 font-black uppercase text-xl shadow-[3px_3px_0px_0px_rgba(170,181,60,0.5)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_0px_0px_rgba(170,181,60,0.5)] active:translate-y-1 active:translate-x-1 active:shadow-none transition-all flex justify-center items-center gap-3">
                <Send size={24} />
                SUBMIT_QUEST
              </button>
            </form>

            <div className="pt-12 border-t-TT border-[#aab53c]/30 flex justify-center gap-8">
              <a href="#" className="p-4 border border-[#aab53c] hover:bg-[#aab53c] hover:text-[#0d0e07] transition-colors shadow-[2px_2px_0px_0px_rgba(170,181,60,1)]">
                <Github size={28} />
              </a>
              <a href="#" className="p-4 border border-[#aab53c] hover:bg-[#aab53c] hover:text-[#0d0e07] transition-colors shadow-[2px_2px_0px_0px_rgba(170,181,60,1)]">
                <Linkedin size={28} />
              </a>
              <a href="#" className="p-4 border border-[#aab53c] hover:bg-[#aab53c] hover:text-[#0d0e07] transition-colors shadow-[2px_2px_0px_0px_rgba(170,181,60,1)]">
                <Twitter size={28} />
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer className="text-center py-6 border-t-TT border-[#cbd45f] bg-[#0d0e07] text-sm">
        <p>SYSTEM_UPTIME: 99.9% | Emran  © 2026</p>
      </footer>
      <MouseCat />
    </div>
  );
}
