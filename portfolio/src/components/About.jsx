export default function About() {
  return (
    <section id="about" className="py-25 px-6">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-3 gradient-text">About Me</h2>
        <p className="text-center text-text-muted text-sm max-w-[600px] mx-auto mb-15 leading-relaxed">
          Here you will find more information about me, what I do, and my current skills
        </p>
        <div className="reveal max-w-[800px] mx-auto flex flex-col gap-5 p-10 bg-bg-card border border-border-default rounded-2xl transition-all duration-300 hover:border-border-hover hover:shadow-[0_0_30px_rgba(133,76,230,0.15)]">
          <p className="text-text-secondary text-sm leading-relaxed">
            I am a passionate <strong className="text-accent">Full Stack Developer</strong> with experience in building web and mobile applications
            using modern technologies. I love creating clean, efficient, and user-friendly solutions that make a difference.
            I am constantly exploring new tools and frameworks to stay at the forefront of the tech industry.
          </p>
          <p className="text-text-secondary text-sm leading-relaxed">
            When I'm not coding, you'll find me exploring the latest trends in technology, contributing to open-source projects,
            or sharing knowledge with the developer community. I believe in continuous learning and am committed to growing
            both personally and professionally every day.
          </p>
        </div>
      </div>
    </section>
  )
}
