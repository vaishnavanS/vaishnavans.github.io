import React from 'react';

function ShieldBot() {
    return (
        <svg
            viewBox="0 0 300 300"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Illustration of a small robot holding a shield, representing security and technical skills"
            className="shieldbot-mascot"
        >
            <rect x="90" y="110" width="120" height="110" rx="14" fill="#00b8c4" stroke="#0f0f0f" strokeWidth="3" />
            <rect x="115" y="60" width="70" height="60" rx="10" fill="#00d9e8" stroke="#0f0f0f" strokeWidth="3" />
            <circle cx="135" cy="90" r="8" fill="#0f0f0f" />
            <circle cx="165" cy="90" r="8" fill="#0f0f0f" />
            <rect x="145" y="35" width="10" height="25" fill="#0f0f0f" />
            <circle cx="150" cy="30" r="8" fill="#e8621f" stroke="#0f0f0f" strokeWidth="2" />
            <path
                d="M150 140 L185 150 L185 185 Q150 210 150 210 Q115 210 115 185 L115 150 Z"
                fill="#f7ede1"
                stroke="#0f0f0f"
                strokeWidth="3"
            />
            <path d="M137 172 L147 182 L166 160" fill="none" stroke="#0f0f0f" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="60" y="150" width="30" height="14" rx="4" fill="#7000ff" stroke="#0f0f0f" strokeWidth="2" />
            <rect x="210" y="150" width="30" height="14" rx="4" fill="#7000ff" stroke="#0f0f0f" strokeWidth="2" />
        </svg>
    );
}

export default ShieldBot;
