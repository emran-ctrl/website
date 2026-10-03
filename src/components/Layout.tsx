import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import MouseCat from '../MouseCat';
import { Menu, X } from 'lucide-react';

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [menuOpen]);

  return (
    <div className="min-h-dvh bg-[#101208] text-[#aab53c] font-mono selection:bg-[#cbd45f] selection:text-[#101208]">
      <nav className="fixed top-0 w-full bg-[#101208] border-b border-[#cbd45f] z-50 py-3 sm:py-4 px-4 shadow-[0px_2px_0px_0px_rgba(203,212,95,0.5)]">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 text-xl sm:text-2xl font-bold tracking-widest uppercase">
            <span>Emran</span>
          </Link>
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 text-sm font-bold">
            <Link to="/about" className="hover:text-[#e2e5bd] transition-colors min-h-[44px] inline-flex items-center px-1 focus-visible:outline-none focus-visible:ring-2 ring-[#cbd45f] rounded-sm">ABOUT</Link>
            <Link to="/experience" className="hover:text-[#e2e5bd] transition-colors min-h-[44px] inline-flex items-center px-1 focus-visible:outline-none focus-visible:ring-2 ring-[#cbd45f] rounded-sm">EXPERIENCE</Link>
            <Link to="/skills" className="hover:text-[#e2e5bd] transition-colors min-h-[44px] inline-flex items-center px-1 focus-visible:outline-none focus-visible:ring-2 ring-[#cbd45f] rounded-sm">SKILLS</Link>
            <Link to="/projects" className="hover:text-[#e2e5bd] transition-colors min-h-[44px] inline-flex items-center px-1 focus-visible:outline-none focus-visible:ring-2 ring-[#cbd45f] rounded-sm">PROJECTS</Link>
            <Link to="/contact" className="hover:text-[#e2e5bd] transition-colors min-h-[44px] inline-flex items-center px-1 focus-visible:outline-none focus-visible:ring-2 ring-[#cbd45f] rounded-sm">CONTACT</Link>
          </div>
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center min-h-[44px] min-w-[44px] border border-[#aab53c] bg-[#101208] text-[#aab53c] shadow-[2px_2px_0px_0px_rgba(170,181,60,1)] hover:bg-[#aab53c]/10 active:translate-y-[1px] active:translate-x-[1px] transition-all"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <div
            id="mobile-nav"
            className="lg:hidden absolute left-0 right-0 top-full bg-[#101208] border-b border-[#cbd45f] shadow-[0_2px_0_0_rgba(203,212,95,0.5)] px-4 py-2 flex flex-col"
          >
            <Link to="/about" onClick={() => setMenuOpen(false)} className="py-3 text-sm font-bold uppercase hover:text-[#e2e5bd] transition-colors">ABOUT</Link>
            <Link to="/experience" onClick={() => setMenuOpen(false)} className="py-3 text-sm font-bold uppercase hover:text-[#e2e5bd] transition-colors">EXPERIENCE</Link>
            <Link to="/skills" onClick={() => setMenuOpen(false)} className="py-3 text-sm font-bold uppercase hover:text-[#e2e5bd] transition-colors">SKILLS</Link>
            <Link to="/projects" onClick={() => setMenuOpen(false)} className="py-3 text-sm font-bold uppercase hover:text-[#e2e5bd] transition-colors">PROJECTS</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="py-3 text-sm font-bold uppercase hover:text-[#e2e5bd] transition-colors">CONTACT</Link>
          </div>
        )}
      </nav>

      <main className="max-w-6xl mx-auto px-4 pt-20 sm:pt-24 lg:pt-28 pb-16 space-y-20 sm:space-y-24 md:space-y-32">
        <Outlet />
      </main>

      <footer className="text-center py-6 border-t border-[#cbd45f] bg-[#0d0e07] text-xs sm:text-sm px-4">
        <p>SYSTEM_UPTIME: 99.9% | Emran  © 2026</p>
      </footer>
      <MouseCat />
    </div>
  );
}
