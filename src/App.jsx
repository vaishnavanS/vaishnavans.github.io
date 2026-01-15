import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'contact', 'about', 'skills', 'projects'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
                    setActiveSection(section);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const projects = [
        {
            title: "SafeShell – AI Safe Execution Layer",
            desc: "A security-focused shell that intercepts and validates commands before execution to prevent destructive or hallucinated operations. Designed for both human users and AI agents with rule-based command filtering and confirmation mechanisms.",
            github: "https://github.com/vaishnavanS/Safeshell",
            tags: ["Python", "Security", "AI Safety"]
        },
        {
            title: "Eazy File Converter",
            desc: "A lightweight and user-friendly utility for converting files between multiple formats efficiently. Built for simplicity and everyday productivity.",
            github: "https://github.com/vaishnavanS/Eazy_File_Converter",
            tags: ["React", "FastAPI", "Utility"]
        },
        {
            title: "Resume Matcher",
            desc: "An AI-based system that analyzes and matches resumes with job descriptions using natural language processing techniques to score relevance.",
            github: "https://github.com/vaishnavanS/Resume_Matcher",
            tags: ["NLP", "AI", "React"]
        },
        {
            title: "Talk to Your DB",
            desc: "A natural language interface that allows users to interact with databases using plain English queries, converting them into SQL and retrieving structured results.",
            github: "https://github.com/vaishnavanS/Talk_to_ur_DB",
            tags: ["SQL", "Gemini AI", "Database"]
        }
    ];

    const skills = {
        "Programming Languages": ["C", "Python", "Java", "HTML", "CSS", "JavaScript"],
        "Frameworks & Libraries": ["FastAPI", "Flask", "React"],
        "Databases": ["MySQL", "MongoDB", "SQLite"],
        "Tools & Platforms": ["Linux", "Git", "GitHub", "VS Code"],
        "Core Strengths": ["Problem Solving", "Full Stack Development", "Cyber Security", "AI/ML Fundamentals"]
    };

    return (
        <div className="portfolio-container">
            {/* Navigation */}
            <nav className="navbar glass-card">
                <div className="nav-logo">
                    <span className="text-gradient">V</span>AISHNAVAN
                </div>
                <ul className="nav-links">
                    {['home', 'contact', 'about', 'skills', 'projects'].map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item}`}
                                className={activeSection === item ? 'active' : ''}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href="Vaishnavan_S_Resume.pdf" download className="nav-resume-btn">Resume</a>
                    </li>
                </ul>
            </nav>

            {/* Hero Section */}
            <section id="home" className="hero-section">
                <div className="hero-content fade-in">
                    <h1 className="hero-title">
                        I'm <span className="text-gradient">Vaishnavan S</span>
                    </h1>
                    <p className="hero-tagline">
                        Cyber Security Enthusiast | Full Stack Developer | AI/ML Explorer
                    </p>
                </div>
            </section>

            {/* Contact Section - Moved to start */}
            <section id="contact" className="contact-section">
                <h2 className="section-title center"><span className="text-gradient">//</span> Let's Connect</h2>
                <div className="contact-links-container fade-in">
                    <a href="mailto:vaishnavans31@gmail.com" className="cyber-contact-item" aria-label="Email">
                        <div className="icon-wrapper">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                            </svg>
                            <div className="icon-glow"></div>
                        </div>
                        <span>Email</span>
                    </a>

                    <a href="https://github.com/vaishnavanS" target="_blank" rel="noopener noreferrer" className="cyber-contact-item" aria-label="GitHub">
                        <div className="icon-wrapper">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                            <div className="icon-glow"></div>
                        </div>
                        <span>GitHub</span>
                    </a>

                    <a href="https://www.linkedin.com/in/vaishnavan10/" target="_blank" rel="noopener noreferrer" className="cyber-contact-item" aria-label="LinkedIn">
                        <div className="icon-wrapper">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                            </svg>
                            <div className="icon-glow"></div>
                        </div>
                        <span>LinkedIn</span>
                    </a>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about-section">
                <h2 className="section-title"><span className="text-gradient">//</span> About Me</h2>
                <div className="glass-card about-card fade-in">
                    <p>
                        I am a Computer Science and Engineering (Cyber Security) student with a strong interest in building secure systems, full-stack web applications, and AI-powered solutions. I focus on solving real-world problems through practical projects rather than just theoretical learning. My areas of interest include cybersecurity, AI safety, and intelligent automation.
                    </p>
                    <div className="institution-info">
                        <strong>Sri Shakthi Institute of Engineering and Technology</strong>
                        <span>Batch: 2024 – 2028</span>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="skills-section">
                <h2 className="section-title"><span className="text-gradient">//</span> My Arsenal</h2>
                <div className="skills-grid">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category} className="skill-category glass-card fade-in">
                            <h3>{category}</h3>
                            <div className="skill-tags">
                                {items.map(skill => (
                                    <span key={skill} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="projects-section">
                <h2 className="section-title"><span className="text-gradient">//</span> Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card glass-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="project-tags">
                                {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                            </div>
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                                View on GitHub →
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            <footer className="footer">
                <p>© {new Date().getFullYear()} Vaishnavan S Built with passion for Cyber Security & AI.</p>
            </footer>
        </div>
    );
}

export default App;
