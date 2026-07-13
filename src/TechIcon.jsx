import React from 'react';

function TechIcon({ name, className = "" }) {
    const cleanName = name.toLowerCase().trim();

    // High-quality colorful brand SVG icons matching the reference image
    const getSvgContent = () => {
        switch (cleanName) {
            case 'c':
                return (
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                        <circle cx="12" cy="12" r="10" fill="#00599C" />
                        <path d="M16 15a4 4 0 1 1 0-6" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                );
            case 'python':
                return (
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                        <path d="M12 2c-3.1 0-3.9.3-4.7.7A2.3 2.3 0 0 0 6 5.1c0 1 .8 1.6 1.8 1.6h2.7v.5h-4a2.5 2.5 0 0 0-2.5 2.5v1.2a2.2 2.2 0 0 0 1.2 2c.8.4 1.7.5 2.6.5h1.2v-1.7a2.5 2.5 0 0 1 2.5-2.5h3.4a2 2 0 0 0 2-2V5c0-1.7-1.4-3-3.1-3H12z" fill="#3776AB" />
                        <path d="M12 22c3.1 0 3.9-.3 4.7-.7a2.3 2.3 0 0 0 1.3-2.4c0-1-.8-1.6-1.8-1.6h-2.7v-.5h4a2.5 2.5 0 0 0 2.5-2.5v-1.2a2.2 2.2 0 0 0-1.2-2c-.8-.4-1.7-.5-2.6-.5h-1.2v1.7a2.5 2.5 0 0 1-2.5 2.5H9.3a2 2 0 0 0-2 2v2.3c0 1.7 1.4 3 3.1 3H12z" fill="#FFD343" />
                        <circle cx="9.2" cy="5.2" r="0.7" fill="#FFF" />
                        <circle cx="14.8" cy="18.8" r="0.7" fill="#000" />
                    </svg>
                );
            case 'java':
                return (
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                        <path d="M5 13c0 3 4 5 7 5s7-2 7-5H5z" fill="#5382A1" />
                        <path d="M12 17c3.866 0 7-1.12 7-2.5S15.866 12 12 12s-7 1.12-7 2.5 3.134 2.5 7 2.5z" stroke="#0073B7" strokeWidth="1" />
                        <path d="M12 21c4.5 0 8-1.5 8-3H4c0 1.5 3.5 3 8 3z" fill="#E2442C" opacity="0.8" />
                        <path d="M8 8c1-1 2-2 1-4m3 5c1-1 2-2 1-5m2.5 6.5c.5-.7.8-1.3.5-2.5" stroke="#F89820" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                );
            case 'html':
                return (
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                        <path d="M4 21L2 2h20l-2 19-8 3-8-3z" fill="#E34F26" />
                        <path d="M12 23.5l6.5-2.4L20 4.5H12v19z" fill="#EF652A" />
                        <path d="M12 9.5H8.3l-.3-3H12V3.5H5.2l.8 9.1H12v-3.1zM12 16.2l-3.3-1-.2-2H5.5l.4 4.8 6.1 2.2v-4z" fill="#EBEBEB" />
                        <path d="M12 9.5h3.4l-.4 3.7-3 1v-3.1h3.4l-.3 3.6-3 1v3.1l6.1-2.2.8-9.1H12v3z" fill="#FFFFFF" />
                    </svg>
                );
            case 'css':
                return (
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                        <path d="M4 21L2 2h20l-2 19-8 3-8-3z" fill="#1572B6" />
                        <path d="M12 23.5l6.5-2.4L20 4.5H12v19z" fill="#33A9DC" />
                        <path d="M12 9.5H8.3l-.3-3H12V3.5H5.2l.8 9.1H12v-3.1zM12 16.2l-3.3-1-.2-2H5.5l.4 4.8 6.1 2.2v-4z" fill="#EBEBEB" opacity="0.9" />
                        <path d="M12 9.5h3.4l-.4 3.7-3 1v-3.1h3.4l-.3 3.6-3 1v3.1l6.1-2.2.8-9.1H12v3z" fill="#FFFFFF" />
                    </svg>
                );
            case 'javascript':
                return (
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                        <rect width="24" height="24" rx="3" fill="#F7DF1E" />
                        <path d="M18.8 17.5c0 .7-.3 1.2-.7 1.5-.5.4-1.2.6-2.1.6-1 0-1.8-.4-2.2-.9l1-1c.3.4.7.6 1.2.6.4 0 .7-.1.9-.3.2-.2.3-.4.3-.7v-5.8h1.6v6zM13.2 17.5c0 .7-.3 1.2-.7 1.5-.5.4-1.2.6-2.1.6-1 0-1.8-.4-2.2-.9l1-1c.3.4.7.6 1.2.6.4 0 .7-.1.9-.3.2-.2.3-.4.3-.7v-.5c0-.8-.7-1.4-1.5-1.4-.8 0-1.5.6-1.5 1.4v.5h-1.6v-.5c0-1.6 1.3-3 3-3s3 1.4 3 3v1z" fill="#000000" />
                    </svg>
                );
            case 'fastapi':
                return (
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#009688" />
                        <path d="M13.5 6L6.5 14.5H12L10.5 18L17.5 9.5H12L13.5 6z" fill="#FFFFFF" />
                    </svg>
                );
            case 'flask':
                return (
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                        <rect width="24" height="24" rx="4" fill="#2c3e50" />
                        <path d="M12 4l-4 8h8l-4-8z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinejoin="round" />
                        <path d="M8 12c-1.5 0-3 1.5-3 3.5S6.5 19 8 19h8c1.5 0 3-1.5 3-3.5S17.5 12 16 12H8z" fill="#1ABC9C" />
                        <circle cx="10" cy="15" r="1" fill="#FFF" />
                        <circle cx="14" cy="16" r="0.7" fill="#FFF" />
                    </svg>
                );
            case 'react':
                return (
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                        <rect width="24" height="24" rx="4" fill="#20232A" />
                        <ellipse cx="12" cy="12" rx="9" ry="3.3" stroke="#61DAFB" strokeWidth="1" transform="rotate(30 12 12)" />
                        <ellipse cx="12" cy="12" rx="9" ry="3.3" stroke="#61DAFB" strokeWidth="1" transform="rotate(90 12 12)" />
                        <ellipse cx="12" cy="12" rx="9" ry="3.3" stroke="#61DAFB" strokeWidth="1" transform="rotate(150 12 12)" />
                        <circle cx="12" cy="12" r="1.5" fill="#61DAFB" />
                    </svg>
                );
            case 'mysql':
                return (
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                        <circle cx="12" cy="12" r="10" fill="#00758F" />
                        <path d="M6 13c1.5-3.5 5-5.5 8-4.5M16 10c.5.5.8 1.2.7 1.8-.1.7-.5 1-1.2.9-.6-.1-.8-.5-.7-1.1M13 14c-1 .5-2 1.5-3 2" stroke="#F29111" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M12 17c3 0 5-1 5-2v-4c0 1-2 2-5 2s-5-1-5-2v4c0 1 2 2 5 2z" fill="#FFF" opacity="0.3" />
                    </svg>
                );
            case 'mongodb':
                return (
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                        <rect width="24" height="24" rx="4" fill="#13AA52" />
                        <path d="M12 3.5c0 0-4 3.5-4 7.5s4 7.5 4 7.5 4-3.5 4-7.5-4-7.5-4-7.5z" fill="#47A248" />
                        <path d="M12 3.5v15" stroke="#FFF" strokeWidth="1.2" />
                        <path d="M10.2 11c1 1.2 2.6 1.2 3.6 0" stroke="#F29111" strokeWidth="1" />
                    </svg>
                );
            case 'sqlite':
                return (
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                        <circle cx="12" cy="12" r="10" fill="#003B57" />
                        <path d="M7 9a6 3 0 0 1 10 0v5a6 3 0 0 1-10 0V9z" stroke="#FFF" strokeWidth="1" />
                        <path d="M7 11.5c3 1.5 7 1.5 10 0" stroke="#41B883" strokeWidth="1" />
                    </svg>
                );
            case 'linux':
                return (
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                        <circle cx="12" cy="12" r="10" fill="#000000" />
                        <path d="M12 4a3 3 0 0 0-3 3c0 2 1.5 3 3 5 1.5-2 3-3 3-3a3 3 0 0 0-3-3z" fill="#FFFFFF" />
                        <path d="M9 16c-1 0-2 .5-2 1.5s1 2.5 5 2.5 5-1.5 5-2.5-1-1.5-2-1.5" fill="#FCC624" />
                        <ellipse cx="10.5" cy="7" rx="0.5" ry="1" fill="#000" />
                        <ellipse cx="13.5" cy="7" rx="0.5" ry="1" fill="#000" />
                        <path d="M11 9.5s.5.5 1 .5 1-.5 1-.5" stroke="#FCC624" strokeWidth="1" />
                    </svg>
                );
            case 'git':
                return (
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                        <rect width="24" height="24" rx="4" fill="#F05032" />
                        <circle cx="16" cy="16" r="2.5" fill="#FFF" />
                        <circle cx="8" cy="8" r="2.5" fill="#FFF" />
                        <circle cx="8" cy="16" r="2.5" fill="#FFF" />
                        <line x1="8" y1="10.5" x2="8" y2="13.5" stroke="#FFF" strokeWidth="1.8" />
                        <path d="M10.5 16h2c.8 0 1.5-.7 1.5-1.5v-3c0-.8.7-1.5 1.5-1.5h1" stroke="#FFF" strokeWidth="1.8" fill="none" />
                    </svg>
                );
            case 'github':
                return (
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                        <rect width="24" height="24" rx="4" fill="#181717" />
                        <path d="M12 4.5c-4.14 0-7.5 3.36-7.5 7.5 0 3.3 2.14 6.1 5.1 7.1.37.07.5-.16.5-.35v-1.37c-2.08.45-2.52-1-2.52-1-.34-.86-.83-1.1-.83-1.1-.68-.46.05-.45.05-.45.75.05 1.15.78 1.15.78.67 1.14 1.75.8 2.18.62.07-.48.26-.8.47-.98-1.66-.2-3.4-.84-3.4-3.7 0-.8.3-1.47.78-2-.08-.2-.34-1 .07-2 0 0 .63-.2 2.06.77a7.22 7.22 0 0 1 3.87 0c1.43-.97 2.06-.77 2.06-.77.4 1 .15 1.8.07 2 .48.53.78 1.2.78 2 0 2.87-1.75 3.5-3.42 3.68.27.23.5.7.5 1.4v2.07c0 .2.13.43.5.35 2.97-1 5.1-3.8 5.1-7.1 0-4.14-3.36-7.5-7.5-7.5z" fill="#FFFFFF" />
                    </svg>
                );
            case 'vs code':
            case 'vscode':
                return (
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                        <rect width="24" height="24" rx="4" fill="#007ACC" />
                        <path d="M17.5 4.5l-11 7.5 11 7.5v-15z" fill="#0066B3" />
                        <path d="M17.5 4.5L13.5 12l4 7.5" stroke="#FFF" strokeWidth="1.2" />
                        <line x1="6.5" y1="12" x2="19.5" y2="12" stroke="#FFF" strokeWidth="1.2" />
                    </svg>
                );
            default:
                // Default code placeholder icon
                return (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                    </svg>
                );
        }
    };

    return getSvgContent();
}

export default TechIcon;
