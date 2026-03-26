const quickLinks = ['about', 'skills', 'experience', 'projects', 'education', 'contact']

export default function Footer() {
  const handleClick = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-bg-secondary border-t border-accent/[0.08] pt-15 px-6">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 pb-10">
        {/* Brand */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-text-primary">Omisha Pasandul</h3>
          <p className="text-sm text-text-muted leading-relaxed max-w-[320px]">
            Thank you for visiting my personal portfolio website. Connect with me if you'd like to collaborate!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-text-primary">Quick Links</h3>
          <ul className="flex flex-col md:flex-col flex-wrap gap-2">
            {quickLinks.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleClick(e, id)}
                  className="text-sm text-text-muted transition-all duration-300 hover:text-accent hover:pl-1"
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-text-primary">Connect</h3>
          <div className="flex gap-3.5">
            {[
              { href: 'https://github.com', icon: 'fab fa-github', label: 'GitHub' },
              { href: 'https://linkedin.com', icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
              { href: 'https://twitter.com', icon: 'fab fa-twitter', label: 'Twitter' },
              { href: 'mailto:omisha@example.com', icon: 'fas fa-envelope', label: 'Email' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-[42px] h-[42px] flex items-center justify-center border border-border-default rounded-full text-base text-text-secondary transition-all duration-300 hover:bg-accent hover:border-accent hover:text-white hover:-translate-y-0.5 hover:shadow-[0_4px_18px_var(--color-accent-glow)]"
              >
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-5 text-center">
        <p className="text-xs text-text-muted">&copy; 2025 Omisha Pasandul. All rights reserved.</p>
      </div>
    </footer>
  )
}
