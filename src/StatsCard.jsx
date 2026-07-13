import React, { useState, useEffect } from 'react';

const GITHUB_USERNAME = 'vaishnavanS';
const LEETCODE_USERNAME = 'Vaish_7781';

function StatsCard() {
    const [github, setGithub] = useState(null);
    const [leetcode, setLeetcode] = useState(null);
    const [githubError, setGithubError] = useState(false);
    const [leetcodeError, setLeetcodeError] = useState(false);

    useEffect(() => {
        // GitHub public REST API - no auth needed for public profile data
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
            .then(res => {
                if (!res.ok) throw new Error('GitHub fetch failed');
                return res.json();
            })
            .then(data => {
                setGithub({
                    repos: data.public_repos,
                    followers: data.followers
                });
            })
            .catch(() => setGithubError(true));

        // LeetCode has no official public API, so we use a community-hosted
        // proxy. Primary first, fallback if it's down (these free services
        // occasionally sleep/rate-limit).
        fetch(`https://leetcode-stats-api.herokuapp.com/${LEETCODE_USERNAME}`)
            .then(res => {
                if (!res.ok) throw new Error('primary leetcode api failed');
                return res.json();
            })
            .then(data => {
                if (data.status === 'error') throw new Error('user not found');
                setLeetcode({
                    solved: data.totalSolved,
                    easy: data.easySolved,
                    medium: data.mediumSolved,
                    hard: data.hardSolved
                });
            })
            .catch(() => {
                // Fallback API
                fetch(`https://alfa-leetcode-api.onrender.com/${LEETCODE_USERNAME}/solved`)
                    .then(res => {
                        if (!res.ok) throw new Error('fallback leetcode api failed');
                        return res.json();
                    })
                    .then(data => {
                        setLeetcode({
                            solved: data.solvedProblem,
                            easy: data.easySolved,
                            medium: data.mediumSolved,
                            hard: data.hardSolved
                        });
                    })
                    .catch(() => setLeetcodeError(true));
            });
    }, []);

    return (
        <section id="stats" className="stats-section">
            <h2 className="section-title"><span className="text-gradient">//</span> Live stats</h2>
            <div className="stats-grid">
                <a
                    href={`https://github.com/${GITHUB_USERNAME}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="stat-card glass-card fade-in"
                >
                    <span className="stat-label">github repos</span>
                    <span className="stat-value">
                        {githubError ? '—' : github ? github.repos : '...'}
                    </span>
                </a>
                <a
                    href={`https://github.com/${GITHUB_USERNAME}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="stat-card glass-card fade-in"
                >
                    <span className="stat-label">github followers</span>
                    <span className="stat-value">
                        {githubError ? '—' : github ? github.followers : '...'}
                    </span>
                </a>
                <a
                    href={`https://leetcode.com/${LEETCODE_USERNAME}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="stat-card glass-card fade-in"
                >
                    <span className="stat-label">leetcode solved</span>
                    <span className="stat-value">
                        {leetcodeError ? '—' : leetcode ? leetcode.solved : '...'}
                    </span>
                </a>
                <a
                    href={`https://leetcode.com/${LEETCODE_USERNAME}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="stat-card glass-card fade-in"
                >
                    <span className="stat-label">easy / med / hard</span>
                    <span className="stat-value stat-value-small">
                        {leetcodeError
                            ? '—'
                            : leetcode
                                ? `${leetcode.easy} / ${leetcode.medium} / ${leetcode.hard}`
                                : '...'}
                    </span>
                </a>
            </div>
            {(githubError || leetcodeError) && (
                <p className="stats-note">
                    Some live stats couldn't load right now — click through to see the full profile.
                </p>
            )}
        </section>
    );
}

export default StatsCard;
