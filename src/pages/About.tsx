export default function About() {
  return (
    <section>
      <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black mb-8 sm:mb-12 flex items-center gap-2 sm:gap-4 leading-tight break-words">
        <span className="text-[#cbd45f]">#</span> CHARACTER_BIO
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 items-center">
        <div className="col-span-1 flex justify-center">
          <div className="w-40 h-40 sm:w-56 md:w-64 sm:h-56 md:h-64 border-2 border-dashed border-[#cbd45f] p-2 flex items-center justify-center bg-[#0d0e07]/50 shadow-[4px_4px_0px_0px_rgba(203,212,95,0.5)]">
            <div className="text-center space-y-4">
              <p className="text-xs sm:text-sm">AVATAR_MISSING.PNG</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 bg-[#0d0e07] border-2 border-[#aab53c] p-5 sm:p-8 shadow-[4px_4px_0px_0px_rgba(170,181,60,1)] space-y-4 text-base sm:text-lg leading-relaxed">
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
  );
}
