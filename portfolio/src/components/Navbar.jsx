import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = document.querySelectorAll('section[id]')
      const scrollY = window.scrollY + 100
      sections.forEach((sec) => {
        if (scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight) {
          setActiveSection(sec.id)
        }
      })
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['about', 'skills', 'experience', 'projects', 'education']

  const handleClick = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-accent/[0.08]
        ${scrolled ? 'bg-bg-primary/[0.92] shadow-[0_2px_20px_rgba(0,0,0,0.4)]' : 'bg-bg-primary/75'}
        backdrop-blur-[16px]`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[70px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 text-xl font-bold text-text-primary">
          <span className="text-accent text-2xl"><i className="fas fa-code" /></span>
          <span>Portfolio</span>
        </a>

        {/* Nav Links */}
        <ul
          className={`flex gap-2 md:static md:flex-row md:bg-transparent md:p-0 md:border-0
            ${menuOpen
              ? 'fixed top-[70px] left-0 w-full flex-col items-center py-6 gap-1 bg-bg-primary/[0.97] backdrop-blur-[16px] border-b border-border-default'
              : 'hidden md:flex'
            }`}
        >
          {links.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className={`block px-4 py-2 rounded-[10px] text-sm font-medium transition-all duration-300
                  ${activeSection === id
                    ? 'text-text-primary bg-accent/10'
                    : 'text-text-secondary hover:text-text-primary hover:bg-accent/10'
                  }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Github Button */}
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex items-center gap-2 px-5 py-2.5 border-[1.5px] border-accent rounded-full text-sm font-semibold text-accent transition-all duration-300 hover:bg-accent hover:text-white hover:shadow-[0_0_25px_var(--color-accent-glow)]"
        >
          <i className="fab fa-github" /> Github Profile
        </a>

        {/* Hamburger */}
        <button
          className="flex md:hidden flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-[26px] h-[2.5px] bg-text-primary rounded transition-all duration-300 ${menuOpen ? 'translate-y-[7.5px] rotate-45' : ''}`} />
          <span className={`block w-[26px] h-[2.5px] bg-text-primary rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-[26px] h-[2.5px] bg-text-primary rounded transition-all duration-300 ${menuOpen ? '-translate-y-[7.5px] -rotate-45' : ''}`} />
        </button>
      </div>
    </nav>
  )
}
