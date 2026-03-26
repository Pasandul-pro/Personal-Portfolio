import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => {
      setSent(false)
      e.target.reset()
    }, 3000)
  }

  return (
    <section id="contact" className="py-25 px-6">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-3 gradient-text">Contact</h2>
        <p className="text-center text-text-muted text-sm max-w-[600px] mx-auto mb-15 leading-relaxed">
          Feel free to reach out to me for any questions or opportunities!
        </p>
        <div className="max-w-[600px] mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-5 py-4 bg-bg-card border border-border-default rounded-[10px] text-text-primary text-sm outline-none transition-all duration-300 focus:border-accent focus:shadow-[0_0_0_3px_rgba(133,76,230,0.12)] placeholder:text-text-muted"
            />
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-5 py-4 bg-bg-card border border-border-default rounded-[10px] text-text-primary text-sm outline-none transition-all duration-300 focus:border-accent focus:shadow-[0_0_0_3px_rgba(133,76,230,0.12)] placeholder:text-text-muted"
            />
            <input
              type="text"
              placeholder="Subject"
              required
              className="w-full px-5 py-4 bg-bg-card border border-border-default rounded-[10px] text-text-primary text-sm outline-none transition-all duration-300 focus:border-accent focus:shadow-[0_0_0_3px_rgba(133,76,230,0.12)] placeholder:text-text-muted"
            />
            <textarea
              rows={5}
              placeholder="Message"
              required
              className="w-full px-5 py-4 bg-bg-card border border-border-default rounded-[10px] text-text-primary text-sm outline-none transition-all duration-300 focus:border-accent focus:shadow-[0_0_0_3px_rgba(133,76,230,0.12)] placeholder:text-text-muted resize-y"
            />
            <button
              type="submit"
              className={`self-end inline-flex items-center gap-2.5 px-10 py-3.5 rounded-full font-semibold text-sm text-white cursor-pointer transition-all duration-300 shadow-[0_4px_20px_var(--color-accent-glow)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(133,76,230,0.45)]
                ${sent
                  ? 'bg-gradient-to-br from-green-500 to-green-600'
                  : 'bg-gradient-to-br from-accent to-[#6c3bbf]'
                }`}
            >
              {sent ? (
                <><i className="fas fa-check" /> Message Sent!</>
              ) : (
                <><i className="fas fa-paper-plane" /> Send Message</>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
