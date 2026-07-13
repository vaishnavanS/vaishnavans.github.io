import React from 'react';

function FoxMascot() {
    return (
        <svg
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Illustration of a fox wearing a hoodie, sitting with a laptop open to a terminal"
            className="fox-mascot"
        >
            <ellipse cx="200" cy="290" rx="120" ry="70" fill="#e8621f" stroke="#0f0f0f" strokeWidth="3" />
            <path
                d="M90 230 Q90 140 200 130 Q310 140 310 230 L290 250 Q260 200 200 200 Q140 200 110 250 Z"
                fill="#2c2c2c"
                stroke="#0f0f0f"
                strokeWidth="3"
            />
            <circle cx="200" cy="190" r="70" fill="#e8621f" stroke="#0f0f0f" strokeWidth="3" />
            <path d="M140 150 L120 100 L165 145 Z" fill="#e8621f" stroke="#0f0f0f" strokeWidth="3" />
            <path d="M260 150 L280 100 L235 145 Z" fill="#e8621f" stroke="#0f0f0f" strokeWidth="3" />
            <path d="M150 160 L138 125 L172 155 Z" fill="#f7ede1" stroke="#0f0f0f" strokeWidth="3" />
            <path d="M250 160 L262 125 L228 155 Z" fill="#f7ede1" stroke="#0f0f0f" strokeWidth="3" />
            <ellipse cx="175" cy="195" rx="6" ry="8" fill="#0f0f0f" />
            <ellipse cx="225" cy="195" rx="6" ry="8" fill="#0f0f0f" />
            <path
                d="M180 215 Q200 230 220 215 Q210 235 200 235 Q190 235 180 215 Z"
                fill="#f7ede1"
                stroke="#0f0f0f"
                strokeWidth="3"
            />
            <circle cx="200" cy="223" r="3" fill="#0f0f0f" />
            <rect x="120" y="280" width="160" height="100" rx="8" fill="#3a3a3a" stroke="#0f0f0f" strokeWidth="3" />
            <rect x="132" y="292" width="136" height="76" rx="4" fill="#141414" stroke="#0f0f0f" strokeWidth="2" />
            <text x="140" y="315" fontFamily="monospace" fontSize="12" fill="#00f2ff">$ whoami</text>
            <text x="140" y="333" fontFamily="monospace" fontSize="12" fill="#00f2ff">vaishnavan</text>
            <text x="140" y="351" fontFamily="monospace" fontSize="12" fill="#e8621f">_</text>
        </svg>
    );
}

export default FoxMascot;
