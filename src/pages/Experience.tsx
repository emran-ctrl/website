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
    org: 'E-LMIS',
    period: '2025 — PRESENT',
    tasks: [
      'Conducted offensive security engagements: penetration testing, vulnerability assessment, and exploitation of web, network, and infrastructure targets.',
      'Authored detailed pentest reports documenting findings, impact, and remediation steps for clients and leadership.',
      'Suggested hardening implementations, including firewall rules, WAF configuration, and SAST integration into development pipelines.',
      'Built backend services using NestJS with Hasura for GraphQL APIs and database layer management.'
    ]
  }
];

export default function Experience() {
  return (
    <section>
      <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black mb-8 sm:mb-12 flex items-center gap-2 sm:gap-4 leading-tight break-words">
        <span className="text-[#cbd45f]">#</span> EXPERIENCE_LOG
      </h2>
      <div className="space-y-6 sm:space-y-8">
        {EXPERIENCE.map((job, idx) => (
          <div key={idx} className="bg-[#0d0e07] border-2 border-[#cbd45f] shadow-[4px_4px_0px_0px_rgba(203,212,95,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(203,212,95,1)] transition-all duration-300">
            <div className="flex flex-wrap justify-between items-center gap-3 sm:gap-4 border-b-2 border-[#cbd45f] bg-[#aab53c]/5 px-4 sm:px-6 py-3 sm:py-4">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold uppercase">{job.role}</h3>
                <p className="text-xs sm:text-sm text-[#8f9468] uppercase font-bold">{job.org}</p>
              </div>
              <span className="text-xs sm:text-sm font-black bg-[#101208] border border-[#aab53c] px-2 sm:px-3 py-1 uppercase">{job.period}</span>
            </div>
            <ul className="px-4 sm:px-6 py-4 sm:py-5 space-y-3 text-[#d6daae] text-sm sm:text-base">
              {job.tasks.map((task) => (
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
  );
}
