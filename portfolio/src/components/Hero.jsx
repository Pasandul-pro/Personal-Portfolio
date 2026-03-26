import { useState, useEffect } from 'react'
import profileImg from '../assets/my pic.jpg'

const roles = [
  'Full Stack Developer',
  'Frontend Engineer',
  'Backend Developer',
  'Mobile App Developer',
  'UI/UX Enthusiast',
]

export default function Hero() {
  const [text, setText] = useState('')
  const [roleIdx, setRoleIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIdx]
    let speed = deleting ? 40 : 80

    if (!deleting && charIdx === current.length) speed = 2000
    if (deleting && charIdx === 0) speed = 400

    const timer = setTimeout(() => {
      if (!deleting && charIdx === current.length) {
        setDeleting(true)
      } else if (deleting && charIdx === 0) {
        setDeleting(false)
        setRoleIdx((prev) => (prev + 1) % roles.length)
      } else {
        setText(current.substring(0, deleting ? charIdx - 1 : charIdx + 1))
        setCharIdx((prev) => prev + (deleting ? -1 : 1))
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [charIdx, deleting, roleIdx])

  return (
    <section id="hero" className="min-h-screen flex items-center relative pt-[100px] pb-15 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-15 w-full">
        {/* Text */}
        <div className="flex-1 max-w-[600px] text-center md:text-left">
          <p className="text-lg text-text-secondary font-medium mb-1">Hi, I am</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3 gradient-text">
            Omisha Pasandul
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-text-secondary mb-5">
            I am a <span className="text-accent">{text}</span>
            <span className="text-accent cursor-blink">|</span>
          </h2>
          <p className="text-sm text-text-muted leading-relaxed mb-8 max-w-[520px] mx-auto md:mx-0">
            I am a motivated and versatile individual, always eager to take on new challenges.
            With a passion for learning, I am dedicated to delivering high-quality results.
            With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-br from-accent to-[#6c3bbf] text-white rounded-full font-semibold text-sm transition-all duration-300 shadow-[0_4px_20px_var(--color-accent-glow)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(133,76,230,0.45)]"
          >
            <i className="fab fa-github" /> Github Profile
          </a>
        </div>

        {/* Image */}
        <div className="shrink-0">
          <div className="w-[240px] h-[240px] md:w-[340px] md:h-[340px] rounded-full overflow-hidden border-[3px] border-accent shadow-[0_0_50px_var(--color-accent-glow),0_0_100px_rgba(133,76,230,0.1)] animate-float">
            <img src={profileImg} alt="Omisha Pasandul" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(133,76,230,0.08)_0%,transparent_70%)] pointer-events-none -z-10" />
    </section>
  )
}
