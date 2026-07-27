import React, { useState, useEffect } from 'react';
import './App.css';
import StatsCard from './StatsCard';
import FoxMascot from './FoxMascot';
import OwlMascot from './OwlMascot';
import TechIcon from './TechIcon';

function App() {
    const [activeSection, setActiveSection] = useState('home');
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
    const [activeProject, setActiveProject] = useState(0);

    // Interactive Visitor Login State
    const [visitorName, setVisitorName] = useState(() => localStorage.getItem('visitorName') || '');
    const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem('visitorName'));
    const [nameInput, setNameInput] = useState('');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const finalName = nameInput.trim() || 'guest';
        setVisitorName(finalName);
        setIsLoggedIn(true);
        localStorage.setItem('visitorName', finalName);
    };

    const handleLogout = () => {
        setVisitorName('');
        setIsLoggedIn(false);
        setNameInput('');
        localStorage.removeItem('visitorName');
    };

    const getGreeting = () => {
        const hours = new Date().getHours();
        if (hours >= 5 && hours < 12) return 'good morning';
        if (hours >= 12 && hours < 17) return 'good afternoon';
        return 'good evening';
    };

    useEffect(() => {
        const handleScroll = () => {
            const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;
            if (isAtBottom) {
                setActiveSection('contact');
                return;
            }

            const sections = ['home', 'about', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 120;

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
            title: "SafeShell",
            subtitle: "AI Safe Execution Layer",
            desc: <>A security-focused shell designed to validate and filter commands before execution. It mitigates <span className="scihub-highlight-black">destructive command risk</span> and AI hallucination payloads using local rule checks and <span className="scihub-highlight-dotted">interactive warnings</span>.</>,
            github: "https://github.com/vaishnavanS/Safeshell",
            tags: ["Python", "Security", "AI Safety", "Shell"],
            consoleLogs: [
                { type: 'input', text: './safeshell --rules default.json' },
                { type: 'info', text: 'initializing safe shell execution daemon...' },
                { type: 'info', text: 'intercepted: rm -rf /etc/hosts' },
                { type: 'warn', text: 'blocked: command violates network configuration rules.' },
                { type: 'success', text: 'safe environment restored' }
            ]
        },
        {
            title: "VulnLens Pro",
            subtitle: "Multi-Agent Security Scanner",
            desc: <>A multi-agent AI scanner built with FastAPI and React that orchestrates several LLMs to <span className="scihub-highlight-dotted">crawl codebases</span>, identify security flaws, explain findings in plain language, and suggest <span className="scihub-highlight-red">automated patches</span>.</>,
            github: "https://github.com/vaishnavanS/VlnMyth",
            tags: ["FastAPI", "React", "AI Agents", "Python"],
            consoleLogs: [
                { type: 'input', text: 'python -m vulnlens --scan ./src/auth.py' },
                { type: 'info', text: 'spawning parser agent & scanner agent...' },
                { type: 'warn', text: 'vulnerability found: Hardcoded JWT Secret Key' },
                { type: 'info', text: 'explaining: storing secrets in code exposes key to reverse engineering.' },
                { type: 'success', text: 'patch recommended: environment variables migration' }
            ]
        },
        {
            title: "ChaosGuard",
            subtitle: "Chaos & Resilience Backend",
            desc: <>A Go-based backend explorer for chaos engineering, <span className="scihub-highlight-black">fault injection</span>, and resilience benchmarking. Builds solid foundation to test API failure recovery under latency and <span className="scihub-highlight-dotted">network partition</span> scenarios.</>,
            github: "https://github.com/vaishnavanS/ChaosGuard",
            tags: ["Go", "Backend", "Chaos Eng", "Resilience"],
            consoleLogs: [
                { type: 'input', text: 'go run cmd/chaos/main.go --target=users-api' },
                { type: 'info', text: 'injecting 15% random HTTP latency errors...' },
                { type: 'warn', text: 'users-api ping exceeded limit (250ms)' },
                { type: 'info', text: 'testing circuit breaker threshold recovery...' },
                { type: 'success', text: 'service healthy, circuit closed' }
            ]
        },
        {
            title: "LAN File Share",
            subtitle: "Lightweight Wi-Fi Share Utility",
            desc: <>An instant local-network file-sharing app built with Node.js and Express. Eliminates <span className="scihub-highlight-black">external internet reliance</span>, accounts, or configurations to move documents securely inside standard <span className="scihub-highlight-dotted">local networks</span>.</>,
            github: "https://github.com/vaishnavanS/Lan-File-Share",
            tags: ["Node.js", "Express", "LAN", "Network"],
            consoleLogs: [
                { type: 'input', text: 'npm run start:lan' },
                { type: 'info', text: 'express sharing server active on port 3000' },
                { type: 'info', text: 'incoming socket download request from 192.168.1.18' },
                { type: 'success', text: 'sent: final_research.pdf (12.4 MB) at 84 MB/s' }
            ]
        },
        {
            title: "Eazy File Converter",
            subtitle: "Everyday Format Utility",
            desc: <>A user-friendly formatting utility built to handle conversions of files, images, and documents cleanly. Employs FastAPI for backend processing speeds and React for <span className="scihub-highlight-red">dynamic feedback</span>.</>,
            github: "https://github.com/vaishnavanS/Eazy_File_Converter",
            tags: ["React", "FastAPI", "Python", "Tool"],
            consoleLogs: [
                { type: 'input', text: 'curl -F "file=@doc.png" http://localhost:8000/api/convert/webp' },
                { type: 'info', text: 'converting doc.png to optimized webp format...' },
                { type: 'info', text: 'saving space: 1.2MB -> 180KB (85% reduction)' },
                { type: 'success', text: 'file conversion successful' }
            ]
        },
        {
            title: "Resume Matcher",
            subtitle: "AI NLP Resume Assessor",
            desc: <>An AI system that parses PDF resumes and job descriptions using <span className="scihub-highlight-black">Natural Language Processing</span>. Scores matches based on skill alignment, experience metrics, and term occurrences.</>,
            github: "https://github.com/vaishnavanS/Resume_Matcher",
            tags: ["NLP", "AI", "React", "Python"],
            consoleLogs: [
                { type: 'input', text: 'python match.py --cv=my_cv.pdf --jd=job.txt' },
                { type: 'info', text: 'parsing pdf nodes & extracting key skills...' },
                { type: 'info', text: 'calculating semantic cosine similarity...' },
                { type: 'success', text: 'similarity score: 92% (strong match)' }
            ]
        },
        {
            title: "Talk to Your DB",
            subtitle: "Natural Language SQL Interface",
            desc: <>An interface converting natural language questions into structured SQL queries using Gemini AI. Connects queries safely to retrieve <span className="scihub-highlight-dotted">tabular read-only reports</span> instantly.</>,
            github: "https://github.com/vaishnavanS/Talk_to_ur_DB",
            tags: ["SQL", "Gemini AI", "Database", "React"],
            consoleLogs: [
                { type: 'input', text: 'python -m talktodb "average project rating"' },
                { type: 'info', text: 'translating intent to database dialect SQL...' },
                { type: 'info', text: 'query: SELECT AVG(rating) FROM projects;' },
                { type: 'success', text: 'result: 4.85 / 5.00' }
            ]
        }
    ];

    // Single integrated list of skills matching image
    const skillsList = ["python", "c", "java", "html", "css", "javascript", "fastapi", "flask", "react", "mysql", "mongodb", "sqlite", "linux", "git", "github", "vs code"];

    return (
        <div className="portfolio-container">
            {/* Navigation */}
            <nav className="navbar">
                <div className="nav-content">
                    <div className="nav-logo">
                        <span>Nice to Connect! 👋</span>
                    </div>
                    <ul className="nav-links">
                        {['home', 'about', 'projects', 'contact'].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item}`}
                                    className={activeSection === item ? 'active' : ''}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a href="Vaishnavan_S_Resume.pdf" download className="nav-resume-btn">resume</a>
                        </li>
                        <li>
                            <button
                                onClick={toggleTheme}
                                className="theme-toggle-btn"
                                aria-label="Toggle theme mode"
                            >
                                {theme === 'dark' ? '☀' : '☾'}
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="hero-section">
                <div className="hero-layout">
                    {/* Left: ID Badge Card */}
                    <div className="badge-container fade-in">
                        <div className="id-badge">
                            <div className="badge-scanline"></div>
                            <div className="badge-header">
                                <span className="badge-system"></span>
                                <div className="badge-status">
                                    <span className="status-dot"></span>
                                    <span>active</span>
                                </div>
                            </div>
                            <div className="badge-photo-area">
                                <div className="badge-grid-lines"></div>
                                <FoxMascot visitorName={isLoggedIn ? visitorName : 'guest'} />
                            </div>
                            <div className="badge-details">
                                <div className="badge-row">
                                    <span className="label">holder:</span>
                                    <span className="val">Vaishnavan S</span>
                                </div>
                                <div className="badge-row">
                                    <span className="label">dept:</span>
                                    <span className="val">CSE (Cyber Security)</span>
                                </div>
                                <div className="badge-row">
                                    <span className="label">tenure:</span>
                                    <span className="val">2024 – 2028</span>
                                </div>
                            </div>
                            <div className="badge-highlights-row">
                                <div className="badge-highlight-item">
                                    <span className="badge-highlight-val">CYBER</span>
                                    <span className="badge-highlight-lbl">security</span>
                                </div>
                                <div className="badge-highlight-item">
                                    <span className="badge-highlight-val">VERIFIED</span>
                                    <span className="badge-highlight-lbl">clearance</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Terminal CLI Content */}
                    <div className="terminal-window fade-in" style={{ animationDelay: '0.15s' }}>
                        <div className="terminal-header">
                            <div className="terminal-dots">
                                <span className="dot" style={{ borderColor: 'rgba(239, 68, 68, 0.4)' }}></span>
                                <span className="dot" style={{ borderColor: 'rgba(233, 179, 8, 0.4)' }}></span>
                                <span className="dot" style={{ borderColor: 'rgba(34, 197, 94, 0.4)' }}></span>
                            </div>
                            <span className="terminal-title">
                                {isLoggedIn ? `${visitorName}` : 'guest'}@terminal:~
                            </span>
                            <span className="mono-txt" style={{ fontSize: '0.65rem', opacity: 0.6 }}>v1.0.5</span>
                        </div>

                        {/* Interactive Visitor Terminal Body */}
                        {!isLoggedIn ? (
                            <div className="terminal-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <div className="terminal-login-container">
                                    <div className="terminal-login-title">system login initialized...</div>
                                    <div className="terminal-login-subtitle">please establish user session.</div>
                                    <form onSubmit={handleLogin} className="terminal-login-row">
                                        <label className="terminal-login-label">$ login --name</label>
                                        <input
                                            type="text"
                                            value={nameInput}
                                            onChange={(e) => setNameInput(e.target.value)}
                                            placeholder="enter your name"
                                            autoFocus
                                            className="terminal-login-input"
                                        />
                                        <button type="submit" className="terminal-login-btn">
                                            initialize_session
                                        </button>
                                    </form>
                                </div>
                            </div>
                        ) : (
                            <div className="terminal-body">
                                <div className="cli-input">
                                    {getGreeting()}, {visitorName}! session active.{' '}
                                    <button 
                                        onClick={handleLogout} 
                                        style={{ 
                                            background: 'transparent', 
                                            border: 'none', 
                                            color: 'var(--accent-secondary)', 
                                            cursor: 'pointer', 
                                            fontFamily: 'var(--font-mono)', 
                                            fontSize: '0.75rem', 
                                            textDecoration: 'underline', 
                                            marginLeft: '8px' 
                                        }}
                                    >
                                        [change name]
                                    </button>
                                </div>
                                <div className="cli-input" style={{ marginTop: '12px' }}>$ finger {visitorName}</div>
                                <div className="cli-output">
                                    login: <span className="cli-highlight">{visitorName}</span><br />
                                    name: <span className="cli-highlight">Vaishnavan S</span><br />
                                    project count: <span className="cli-highlight">7 active repos</span><br />
                                    focus: <span className="cli-highlight">cyber security, full stack development</span><br />
                                    status: <span className="cli-highlight">connected to vaishnavan.dev</span>
                                </div>
                                <div className="cli-input">$ cat intro.txt</div>
                                <div className="cli-output cli-tagline">
                                    "i explore the boundaries between intelligent AI agents, secure computing infrastructures, and clean full-stack design. currently researching automated vulnerability verification."
                                </div>
                                <div className="hero-actions">
                                    <a href="#projects" className="cyber-btn">explore_projects</a>
                                    <a href="#contact" className="cyber-btn-secondary">get_in_touch</a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about-section">
                <h2 className="about-custom-title">
                    About <span className="highlight-text">Me !</span>
                </h2>
                <div className="about-intro-row fade-in">
                    <div className="about-mascot-container">
                        <OwlMascot />
                    </div>
                    <p className="about-intro-text">
                        Cyber Security undergraduate and full-stack developer focused on building intelligent, secure software 
                        and applying AI agent models to static vulnerability checking. Passionate about automated security 
                        diagnostics, threat modeling, and crafting robust, production-ready tools.
                    </p>
                </div>

                {/* Overhauled 3-Column layout containing Experience, Education/Organizations, and Tech Stack! */}
                <div className="about-three-cols fade-in" style={{ animationDelay: '0.15s' }}>
                    
                    {/* Column 1: Experience */}
                    <div className="about-col">
                        <div className="col-header">experience</div>
                        <div className="about-col-item">
                            <span className="item-meta">Active Lab Member</span>
                            <h4>Security & AI Exploration</h4>
                            <p>Testing and analyzing multi-agent security frameworks. Exploring command validation rules with automated pipelines to block shell-injected payloads.</p>
                        </div>
                        <div className="about-col-item">
                            <span className="item-meta">Open Source Developer</span>
                            <h4>Student Developer</h4>
                            <p>Collaborated with peers to design lightweight networking tools and SQL converters.</p>
                        </div>
                    </div>
                    
                    {/* Column 2: Education & Organizations */}
                    <div className="about-col">
                        <div className="col-header">education</div>
                        <div className="about-col-item">
                            <span className="item-meta">2024 – 2028</span>
                            <h4>B.E. Computer Science & Engineering (Cyber Security)</h4>
                            <p>Sri Shakthi Institute of Engineering and Technology. Core focus in secure systems and network defense.</p>
                        </div>
                        <div className="col-header" style={{ marginTop: '20px' }}>organizations</div>
                        <div className="about-col-item">
                            <h4>Cyber Security Club</h4>
                            <p>Student lead for security exercises and campus workshops.</p>
                        </div>
                    </div>

                    {/* Column 3: Tech Stack (Integrated 4x4 icons grid) */}
                    <div className="about-col">
                        <div className="col-header">tech stack</div>
                        <div className="tech-stack-grid">
                            {skillsList.map(skill => (
                                <div key={skill} className="skill-icon-card" title={skill}>
                                    <TechIcon name={skill} />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>


            {/* Projects Section */}
            <section id="projects" className="projects-section">
                <h2 className="about-custom-title">
                    Projects <span className="highlight-text">Database</span>
                </h2>
                <div className="accordion-container fade-in">
                    {projects.map((project, index) => {
                        const isActive = activeProject === index;
                        return (
                            <div
                                key={index}
                                className={`accordion-panel ${isActive ? 'active' : ''}`}
                                onClick={() => {
                                    if (!isActive) setActiveProject(index);
                                }}
                            >
                                {!isActive ? (
                                    <div className="panel-collapsed-content">
                                        <span className="collapsed-num">0{index + 1}</span>
                                        <span className="collapsed-title">{project.title}</span>
                                    </div>
                                ) : (
                                    <div className="panel-expanded-content">
                                        <div className="project-header-row">
                                            <span className="expanded-num">0{index + 1}</span>
                                            <div className="project-titles">
                                                <h3>{project.title}</h3>
                                                <span className="project-subtitle">{project.subtitle}</span>
                                            </div>
                                        </div>

                                        <p className="project-desc-txt">{project.desc}</p>

                                        {/* Sleek Mock Console Preview Box */}
                                        <div className="project-visual-preview">
                                            <div className="preview-terminal-header">
                                                <span className="terminal-circle red"></span>
                                                <span className="terminal-circle yellow"></span>
                                                <span className="terminal-circle green"></span>
                                                <span className="terminal-title-txt">console_session</span>
                                            </div>
                                            <div className="preview-terminal-body">
                                                <span className="preview-input">$ {project.consoleLogs[0].text}</span>
                                                <span className="preview-output">✓ {project.consoleLogs[project.consoleLogs.length - 1].text}</span>
                                            </div>
                                        </div>

                                        <div className="project-footer-row">
                                            <div className="project-tags-row">
                                                {project.tags.map(tag => (
                                                    <span key={tag} className="project-tag-item">{tag}</span>
                                                ))}
                                            </div>
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="cyber-btn-small"
                                            >
                                                github_repo ↗
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Contact Section - Moved to bottom of the page */}
            <section id="contact" className="contact-section">
                <div className="fade-in">
                    <div className="connect-grid-main">
                        <div className="connect-left-col">
                            <span className="connect-kicker">contact</span>
                            <h2 className="connect-title-bold">Let's</h2>
                            <h2 className="connect-title-outline">connect.</h2>
                        </div>
                        <div className="connect-right-col">
                            <p className="connect-desc">
                                I'm actively looking for ambitious projects, research collaborations, and engineering challenges. 
                                Drop me a message and let's get started.
                            </p>
                            <a href="mailto:vaishnavans31@gmail.com" className="connect-pill-btn">
                                <span>Start a conversation</span>
                                <span style={{ fontSize: '1.05rem', lineHeight: '1' }}>↗</span>
                            </a>
                        </div>
                    </div>

                    <div className="connect-links-grid">
                        <div className="connect-link-col">
                            <span className="connect-col-label">linkedin</span>
                            <a 
                                href="https://www.linkedin.com/in/vaishnavan10/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="connect-col-val"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px', marginRight: '8px' }}>
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                                in/vaishnavan10 ↗
                            </a>
                        </div>

                        <div className="connect-link-col">
                            <span className="connect-col-label">github</span>
                            <a 
                                href="https://github.com/vaishnavanS" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="connect-col-val"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px', marginRight: '8px' }}>
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                                @vaishnavanS ↗
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <p></p>
            </footer>
        </div>
    );
}

export default App;
