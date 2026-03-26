const experiences = [
  {
    icon: 'fas fa-building',
    title: 'Full Stack Developer',
    company: 'Tech Solutions Ltd.',
    date: 'Jan 2024 — Present',
    desc: 'Developing and maintaining scalable web applications using React, Node.js, and MongoDB. Collaborating with cross-functional teams to deliver high-quality software products. Implementing CI/CD pipelines and automated testing frameworks to improve code quality.',
  },
  {
    icon: 'fas fa-laptop-code',
    title: 'Software Engineering Intern',
    company: 'Digital Innovations Inc.',
    date: 'Jun 2023 — Dec 2023',
    desc: 'Assisted in developing RESTful APIs and integrating third-party services. Built responsive UI components using React and Material UI. Participated in agile sprints and contributed to code reviews and documentation.',
  },
  {
    icon: 'fas fa-code',
    title: 'Freelance Web Developer',
    company: 'Self-Employed',
    date: 'Jan 2022 — May 2023',
    desc: 'Designed and developed custom websites for small businesses and startups. Managed end-to-end development lifecycle including requirements gathering, design, development, deployment, and client training.',
  },
]

function TimelineItem({ item }) {
  return (
    <div className="reveal relative mb-10 last:mb-0">
      {/* Dot */}
      <div className="absolute -left-[38px] top-[30px] w-4 h-4 bg-bg-primary border-[3px] border-accent rounded-full shadow-[0_0_12px_var(--color-accent-glow)] z-[2]" />
      {/* Card */}
      <div className="bg-bg-card border border-border-default rounded-2xl px-8 py-7 transition-all duration-300 hover:border-border-hover hover:shadow-[0_0_30px_rgba(133,76,230,0.15)] hover:translate-x-1.5">
        <div className="flex items-start gap-4 mb-3.5">
          <div className="w-12 h-12 min-w-12 flex items-center justify-center bg-accent/[0.12] rounded-xl text-accent text-xl">
            <i className={item.icon} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-text-primary mb-0.5">{item.title}</h3>
            <p className="text-sm text-text-secondary">{item.company}</p>
            <p className="text-xs text-accent font-medium">{item.date}</p>
          </div>
        </div>
        {item.grade && (
          <p className="text-sm text-accent mb-2.5">
            <strong>Grade:</strong> {item.grade}
          </p>
        )}
        <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-25 px-6">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-3 gradient-text">Experience</h2>
        <p className="text-center text-text-muted text-sm max-w-[600px] mx-auto mb-15 leading-relaxed">
          My work experience as a software engineer and working on different companies and projects
        </p>
        <div className="relative max-w-[850px] mx-auto pl-[50px]">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 timeline-line" />
          {experiences.map((exp, i) => (
            <TimelineItem key={i} item={exp} />
          ))}
        </div>
      </div>
    </section>
  )
}

export { TimelineItem }
