import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const LUFFY = `
    ██████████████
  ██              ██
 █   ████    ████   █
█    █  █    █  █    █
█                    █
█     ████████████    █
 █    █          █   █
  ██  █  ██  ██  █  ██
   ██ █         █ ██
     ██████████████
         █    █
        ██    ██
       █  ████  █
      █  ██████  █
     █  █      █  █
    █  █  ████  █  █
    █ █  █    █  █ █
    ██  █      █  ██
`;

const projects = [
  {
    title: "VulnMyth",
    desc: "Multi-agent AI security analyzer for student developers. LangGraph orchestration with FastAPI + React/Vite frontend to detect vulnerabilities across codebases — completely free.",
    github: "https://github.com/vaishnavanS/VulnMyth",
    tags: ["LangGraph", "FastAPI", "React", "AI Security"],
    active: true,
  },
  {
    title: "LogChain",
    desc: "Blockchain audit log integrity system on private Ethereum/Geth PoA network. Solidity smart contracts + Merkle trees + SHA-256 + Python Watchdog + Flask + MongoDB.",
    github: "https://github.com/vaishnavanS/LogChain",
    tags: ["Solidity", "Ethereum", "Flask", "MongoDB"],
    active: false,
  },
  {
    title: "SafeShell",
    desc: "AI Safe Execution Layer that intercepts and validates shell commands before execution. Rule-based filtering designed for both humans and AI agents.",
    github: "https://github.com/vaishnavanS/Safeshell",
    tags: ["Python", "Security", "AI Safety"],
    active: false,
  },
  {
    title: "Talk to Your DB",
    desc: "Natural language → SQL interface powered by Gemini AI. Ask questions in plain English, get structured results from your database.",
    github: "https://github.com/vaishnavanS/Talk_to_ur_DB",
    tags: ["SQL", "Gemini AI", "NLP"],
    active: false,
  },
  {
    title: "Eazy File Converter",
    desc: "Lightweight multi-format file converter with React frontend and FastAPI backend. Simple, fast, no bloat.",
    github: "https://github.com/vaishnavanS/Eazy_File_Converter",
    tags: ["React", "FastAPI", "Utility"],
    active: false,
  },
  {
    title: "Resume Matcher",
    desc: "NLP-powered system that scores resume-to-job-description relevance. Surfaces the best match using natural language processing.",
    github: "https://github.com/vaishnavanS/Resume_Matcher",
    tags: ["NLP", "AI", "React"],
    active: false,
  },
];

const skills = [
  { cat: "Languages", items: ["Python", "JavaScript", "C", "Java", "Kotlin", "Solidity"] },
  { cat: "Frameworks", items: ["React", "FastAPI", "Flask", "LangGraph"] },
  { cat: "Security", items: ["Burp Suite", "Metasploit", "Wireshark", "Nmap", "OSINT"] },
  { cat: "Databases", items: ["MongoDB", "MySQL", "SQLite"] },
  { cat: "Tools", items: ["Kali Linux", "Git", "Geth/Ethereum", "VS Code"] },
  { cat: "Strengths", items: ["Pen Testing", "CVE Research", "CTF", "Smart Contracts", "AI/ML"] },
];

const achievements = [
  { icon: "🏴‍☠️", title: "KI CTF YUGAM26", sub: "Team 0xBlackOut · 23rd Place · ACP Certified", desc: "Competed in crypto, forensics, and web exploitation. Earned ACP Certification." },
  { icon: "🔬", title: "CVE-2025-62399", sub: "Moodle LMS · Auth Brute Force", desc: "Validated authentication brute force vulnerability via authorized college lab research." },
  { icon: "🛡️", title: "Network & CVE Lab", sub: "Sri Shakthi Institute", desc: "Authorized pen testing on college infrastructure — Django attendance system & Moodle LMS." },
  { icon: "⚡", title: "HackTheBox — Reactor", sub: "CVE-2025-29927 · Next.js Auth Bypass", desc: "Exploited middleware auth bypass vulnerability on HTB machine targeting a Next.js app." },
];

export default function App() {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [typed, setTyped] = useState('');
  const fullText = "Cyber Security Enthusiast | Full Stack Developer | AI/ML Explorer";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const secs = ['home','about','skills','projects','achievements','contact'];
      const pos = window.scrollY + 140;
      for (const s of secs) {
        const el = document.getElementById(s);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActive(s); break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = ['home','about','skills','projects','achievements','contact'];

  return (
    <div className="app">
      {/* Ambient background */}
      <div className="bg-orb orb1" />
      <div className="bg-orb orb2" />

      {/* Nav */}
      <nav className="nav">
        <a href="#home" className="nav-logo"><span className="grad">V</span>aishnavan</a>
        <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
          {navItems.map(n => (
            <li key={n}>
              <a href={`#${n}`} className={active === n ? 'nav-a active' : 'nav-a'} onClick={() => setMenuOpen(false)}>
                {n}
              </a>
            </li>
          ))}
          <li><a href="Vaishnavan_S_Resume.pdf" download className="nav-resume">Resume ↓</a></li>
        </ul>
        <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          <span/><span/><span/>
        </button>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-left">
          <p className="hero-pre">// Hello, World</p>
          <h1 className="hero-name">I'm <span className="grad">Vaishnavan S</span></h1>
          <p className="hero-role">{typed}<span className="cursor">|</span></p>
          <blockquote className="hero-quote">
            <p>"I've set myself to become the King of the Pirates... and if I die trying... then at least I tried!"</p>
            <cite>— Monkey D. Luffy</cite>
          </blockquote>
          <div className="hero-btns">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-ghost">Contact Me</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="luffy-wrap">
            <pre className="luffy">{LUFFY}</pre>
            <div className="luffy-ring" />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2 className="sec-title"><span className="grad">01.</span> About Me</h2>
        <div className="about-grid">
          <div className="about-text card">
            <p>I'm a CSE (Cyber Security) student who learns by <span className="hl">breaking things</span> and building them back better. I work on real-world problems — blockchain audit systems, AI vulnerability scanners, secure shells — and compete in CTFs with team <span className="hl">0xBlackOut</span>.</p>
            <p>My approach is hands-on: authorized pen testing on college infrastructure, CVE validation, and shipping projects end-to-end. Theory follows practice, not the other way around.</p>
            <div className="about-info">
              <div className="info-row"><span className="info-label">College</span><span>Sri Shakthi Institute of Engineering & Technology</span></div>
              <div className="info-row"><span className="info-label">Degree</span><span>B.E. CSE (Cyber Security)</span></div>
              <div className="info-row"><span className="info-label">Batch</span><span>2024 – 2028</span></div>
              <div className="info-row"><span className="info-label">CTF Team</span><span className="hl">0xBlackOut</span></div>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat card">
              <span className="stat-num grad">6+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat card">
              <span className="stat-num grad">2</span>
              <span className="stat-label">CVEs Researched</span>
            </div>
            <div className="stat card">
              <span className="stat-num grad">23rd</span>
              <span className="stat-label">CTF Ranking</span>
            </div>
            <div className="stat card">
              <span className="stat-num grad">1yr</span>
              <span className="stat-label">Pen Testing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2 className="sec-title"><span className="grad">02.</span> My Arsenal</h2>
        <div className="skills-grid">
          {skills.map(({ cat, items }) => (
            <div key={cat} className="skill-card card">
              <h3 className="skill-cat">{cat}</h3>
              <div className="skill-tags">
                {items.map(s => <span key={s} className="skill-tag">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2 className="sec-title"><span className="grad">03.</span> Projects</h2>
        <div className="proj-grid">
          {projects.map((p, i) => (
            <div key={i} className={`proj-card card ${p.active ? 'proj-active' : ''}`}>
              <div className="proj-top">
                <div className="proj-tags">
                  {p.tags.map(t => <span key={t} className="ptag">{t}</span>)}
                </div>
                {p.active && <span className="badge-active">● ACTIVE</span>}
              </div>
              <h3 className="proj-title">{p.title}</h3>
              <p className="proj-desc">{p.desc}</p>
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="proj-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="section">
        <h2 className="sec-title"><span className="grad">04.</span> Achievements</h2>
        <div className="ach-grid">
          {achievements.map((a, i) => (
            <div key={i} className="ach-card card">
              <div className="ach-icon">{a.icon}</div>
              <div>
                <h3 className="ach-title">{a.title}</h3>
                <span className="ach-sub">{a.sub}</span>
                <p className="ach-desc">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact-sec">
        <h2 className="sec-title center"><span className="grad">05.</span> Let's Connect</h2>
        <p className="contact-sub">Have a project, a bug to exploit, or just want to talk? I'm in.</p>
        <div className="contact-row">
          <a href="mailto:vaishnavans31@gmail.com" className="contact-btn card">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            vaishnavans31@gmail.com
          </a>
          <a href="https://github.com/vaishnavanS" target="_blank" rel="noopener noreferrer" className="contact-btn card">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            @vaishnavanS
          </a>
          <a href="https://www.linkedin.com/in/vaishnavan10/" target="_blank" rel="noopener noreferrer" className="contact-btn card">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            Vaishnavan S
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Vaishnavan S — Built with 🔥 for Cyber Security & AI</p>
      </footer>
    </div>
  );
}
