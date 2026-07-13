import React from 'react';

function OwlMascot() {
    return (
        <svg
            viewBox="0 0 300 300"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Illustration of an owl wearing glasses and a hoodie, representing security-minded curiosity"
            className="owl-mascot"
        >
            <ellipse cx="150" cy="200" rx="90" ry="80" fill="#7000ff" stroke="#0f0f0f" strokeWidth="3" />
            <path
                d="M70 150 Q70 70 150 60 Q230 70 230 150 L210 165 Q190 110 150 110 Q110 110 90 165 Z"
                fill="#2c2c2c"
                stroke="#0f0f0f"
                strokeWidth="3"
            />
            <circle cx="150" cy="150" r="65" fill="#7000ff" stroke="#0f0f0f" strokeWidth="3" />
            <circle cx="118" cy="150" r="26" fill="#f7ede1" stroke="#0f0f0f" strokeWidth="3" />
            <circle cx="182" cy="150" r="26" fill="#f7ede1" stroke="#0f0f0f" strokeWidth="3" />
            <circle cx="118" cy="150" r="9" fill="#0f0f0f" />
            <circle cx="182" cy="150" r="9" fill="#0f0f0f" />
            <path d="M144 150 L156 150" stroke="#0f0f0f" strokeWidth="3" />
            <path d="M92 150 Q76 148 70 155" fill="none" stroke="#0f0f0f" strokeWidth="3" />
            <path d="M208 150 Q224 148 230 155" fill="none" stroke="#0f0f0f" strokeWidth="3" />
            <path d="M144 172 L156 172 L150 186 Z" fill="#e8621f" stroke="#0f0f0f" strokeWidth="2" />
            <path
                d="M105 205 Q150 225 195 205 L188 240 Q150 252 112 240 Z"
                fill="#f7ede1"
                stroke="#0f0f0f"
                strokeWidth="3"
            />
        </svg>
    );
}

export default OwlMascot;
