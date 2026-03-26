import { useState } from 'react'

const projects = [
  {
    category: 'web',
    icon: 'fas fa-shopping-cart',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    title: 'E-Commerce Platform',
    date: 'Dec 2024 — Feb 2025',
    desc: 'A full-featured e-commerce platform with user authentication, product management, payment integration, and an admin dashboard for order tracking.',
  },
  {
    category: 'ml',
    icon: 'fas fa-brain',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'Flask'],
    title: 'Image Classification System',
    date: 'Sep 2024 — Nov 2024',
    desc: 'A deep learning model for classifying medical images using CNNs. Includes a web interface for uploading and analyzing images with 95% accuracy.',
  },
  {
    category: 'web',
    icon: 'fas fa-comments',
    tags: ['Next.js', 'Socket.io', 'PostgreSQL', 'Redis'],
    title: 'Real-Time Chat App',
    date: 'Jun 2024 — Aug 2024',
    desc: 'A real-time messaging application with group chats, file sharing, read receipts, and online status indicators powered by WebSocket technology.',
  },
  {
    category: 'mobile',
    icon: 'fas fa-heartbeat',
    tags: ['React Native', 'Firebase', 'Redux'],
    title: 'Fitness Tracker App',
    date: 'Mar 2024 — May 2024',
    desc: 'A cross-platform mobile app for tracking workouts, nutrition, and fitness goals. Features include activity logging, progress charts, and social feeds.',
  },
  {
    category: 'ml',
    icon: 'fas fa-chart-line',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit'],
    title: 'Stock Price Predictor',
    date: 'Jan 2024 — Feb 2024',
    desc: 'An ML-powered stock price prediction tool using LSTM and regression models. Includes interactive dashboards for visualizing historical trends and forecasts.',
  },
  {
    category: 'web',
    icon: 'fas fa-tasks',
    tags: ['React', 'TypeScript', 'Node.js', 'MySQL'],
    title: 'Project Management Tool',
    date: 'Oct 2023 — Dec 2023',
    desc: 'A collaborative project management application with drag-and-drop task boards, team management, deadline tracking, and real-time notifications.',
  },
]

const filters = [
  { label: 'All', value: 'all' },
  { label: "Web App's", value: 'web' },
  { label: 'Machine Learning', value: 'ml' },
  { label: "Mobile App's", value: 'mobile' },
]

export default function Projects() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="py-25 px-6">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-3 gradient-text">Projects</h2>
        <p className="text-center text-text-muted text-sm max-w-[600px] mx-auto mb-15 leading-relaxed">
          I have worked on a wide range of projects. Here are some of my projects
        </p>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-6 py-2.5 border-[1.5px] rounded-full text-sm font-medium cursor-pointer transition-all duration-300
                ${active === f.value
                  ? 'bg-accent border-accent text-white shadow-[0_4px_18px_var(--color-accent-glow)]'
                  : 'bg-transparent border-border-default text-text-secondary hover:bg-accent hover:border-accent hover:text-white hover:shadow-[0_4px_18px_var(--color-accent-glow)]'
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={`${project.title}-${i}`}
              className="reveal animate-fade-in-up bg-bg-card border border-border-default rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:border-border-hover hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(133,76,230,0.15)]"
            >
              {/* Image Placeholder */}
              <div className="h-[180px] bg-gradient-to-br from-bg-secondary to-bg-card flex items-center justify-center">
                <i className={`${project.icon} text-4xl text-accent opacity-50`} />
              </div>
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 px-5 pt-4 pb-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-accent/10 rounded-full text-[0.72rem] font-medium text-accent">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-base font-bold px-5 text-text-primary">{project.title}</h3>
              <p className="text-xs text-text-muted px-5">{project.date}</p>
              <p className="text-xs text-text-muted px-5 pt-2 pb-4 leading-relaxed flex-1">{project.desc}</p>
              {/* Links */}
              <div className="flex gap-3 px-5 pb-5">
                <a href="#" className="inline-flex items-center gap-1.5 px-4 py-2 border border-border-default rounded-full text-xs font-medium text-text-secondary transition-all duration-300 hover:border-accent hover:text-accent hover:bg-accent/[0.08]">
                  <i className="fab fa-github" /> Code
                </a>
                <a href="#" className="inline-flex items-center gap-1.5 px-4 py-2 border border-border-default rounded-full text-xs font-medium text-text-secondary transition-all duration-300 hover:border-accent hover:text-accent hover:bg-accent/[0.08]">
                  <i className="fas fa-external-link-alt" /> Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
