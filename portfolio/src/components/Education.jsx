const educationData = [
  {
    icon: 'fas fa-university',
    title: 'University of Colombo',
    degree: 'Bachelor of Science in Computer Science',
    date: 'Sep 2021 — Present',
    grade: '3.75 GPA',
    desc: 'Currently pursuing my Bachelor\'s degree in Computer Science. I have completed 6 semesters and have taken courses in Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Software Engineering, and Machine Learning.',
  },
  {
    icon: 'fas fa-graduation-cap',
    title: 'Royal College, Colombo',
    degree: 'GCE Advanced Level — Physical Science Stream',
    date: 'Jan 2018 — Sep 2020',
    grade: "3A's",
    desc: 'Completed my Advanced Level examinations with excellent results in Mathematics, Physics, and Chemistry. Actively participated in the school\'s Computer Society and Science Club.',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-25 px-6">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-3 gradient-text">Education</h2>
        <p className="text-center text-text-muted text-sm max-w-[600px] mx-auto mb-15 leading-relaxed">
          My education has been a journey of self-discovery and growth. My educational details are as follows
        </p>
        <div className="relative max-w-[850px] mx-auto pl-[50px]">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 timeline-line" />
          {educationData.map((edu, i) => (
            <div key={i} className="reveal relative mb-10 last:mb-0">
              {/* Dot */}
              <div className="absolute -left-[38px] top-[30px] w-4 h-4 bg-bg-primary border-[3px] border-accent rounded-full shadow-[0_0_12px_var(--color-accent-glow)] z-[2]" />
              {/* Card */}
              <div className="bg-bg-card border border-border-default rounded-2xl px-8 py-7 transition-all duration-300 hover:border-border-hover hover:shadow-[0_0_30px_rgba(133,76,230,0.15)] hover:translate-x-1.5">
                <div className="flex items-start gap-4 mb-3.5">
                  <div className="w-12 h-12 min-w-12 flex items-center justify-center bg-accent/[0.12] rounded-xl text-accent text-xl">
                    <i className={edu.icon} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary mb-0.5">{edu.title}</h3>
                    <p className="text-sm text-text-secondary">{edu.degree}</p>
                    <p className="text-xs text-accent font-medium">{edu.date}</p>
                  </div>
                </div>
                <p className="text-sm text-accent mb-2.5">
                  <strong>Grade:</strong> {edu.grade}
                </p>
                <p className="text-sm text-text-muted leading-relaxed">{edu.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
