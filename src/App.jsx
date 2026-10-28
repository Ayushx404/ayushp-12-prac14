import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <section className="hero">
      <div className="hero-text">
        <span className="tag">MCA STUDENT</span>
        <h1>
          Hi, I'm <span>Ayush Patil</span>
        </h1>
        <h2>Learning. Building. Growing.</h2>
        <p>
          I'm an MCA student focused on Java backend development, with a
          growing interest in Android apps. Welcome to my
          personal portfolio.
        </p>
        <div className="hero-actions">
          <NavLink to="/projects" className="primary-btn">
            View my projects
          </NavLink>
          <NavLink to="/contact" className="secondary-btn">
            Get in touch
          </NavLink>
        </div>
      </div>
      <div className="profile-circle">
        <div className="profile-icon">AP</div>
        <h3>Future Developer</h3>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="page">
      <h1>About me</h1>
      <p className="subtitle">A little introduction about myself</p>

      <div className="card">
        <h2>My journey</h2>
        <p>
          I'm pursuing a Master of Computer Applications at Hiray Institute of
          Computer Application, Mumbai. I enjoy solving problems, learning how
          software works under the hood, and building useful applications.
        </p>
        <p>
          My goal is to build a career in backend development while exploring
          Android and Linux systems along the way.
        </p>
      </div>

      <div className="info-grid">
        <div className="info-card">
          <h3>Currently</h3>
          <p>MCA, Hiray Institute of Computer Application</p>
        </div>
        <div className="info-card">
          <h3>Previously</h3>
          <p>BSc IT, CKT College, New Panvel</p>
        </div>
        <div className="info-card">
          <h3>Goal</h3>
          <p>Become a skilled Java backend developer</p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    'Java',
    'Spring Boot',
    'Kotlin & Android',
    'ReactJS',
    'HTML & CSS',
    'Linux',
  ];

  return (
    <section className="page">
      <h1>Skills</h1>
      <p className="subtitle">Technologies I use and am learning</p>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            <span /> {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      icon: '01',
      title: 'Vault',
      description: 'An Android app built with a clean MVVM architecture.',
      tech: 'Kotlin • Hilt • Room',
      link: 'https://github.com/Ayushx404/Vault', // paste your GitHub link here
    },
    {
      icon: '02',
      title: 'Personal Portfolio',
      description: 'A responsive single-page website to showcase my profile.',
      tech: 'ReactJS • CSS',
      link: '', // paste your GitHub link here
    },
  ];

  return (
    <section className="page">
      <h1>Projects</h1>
      <p className="subtitle">Some things I've built and set up</p>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <div className="project-icon">{project.icon}</div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <span className="tech">{project.tech}</span>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View on GitHub →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="page">
      <h1>Let's connect</h1>
      <p className="subtitle">I'm always happy to connect and learn</p>

      <div className="card contact-card">
        <h2>Get in touch</h2>
        <p>Interested in technology, projects, or collaboration?</p>
        <a href="aayush.roha@gmail.com" className="primary-btn">
          Email me
        </a>
      </div>
    </section>
  );
}

function NotFound() {
  return (
    <section className="page">
      <h1>404 - Page not found</h1>
      <NavLink to="/" className="primary-btn">
        Back to home
      </NavLink>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <header className="navbar">
        <NavLink to="/" className="logo">
          Ayush<span>.</span>
        </NavLink>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer>
        <p>Designed and built by Ayush Patil | © 2026</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;