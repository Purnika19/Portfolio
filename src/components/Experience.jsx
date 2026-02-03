const Experience = () => {
    const experiences = [
        {
            role: "Intern",
            company: "Predis AI",
            duration: "March '25 — Present",
            description: "Working on backlink building, technical SEO, and off-page SEO. Collaborating with the ML team on content analysis and automation using Python.",
            tags: ["Python", "SEO", "Machine Learning"]
        },
        {
            role: "Open Source Contributor",
            company: "GirlScript Summer of Code",
            duration: "Oct '24",
            description: "Contributed to open-source projects, improving software development workflows.",
            tags: ["Open Source", "Git"]
        },
        {
            role: "Core Member",
            company: "Microsoft Learn Student Chapter (MLSC)",
            duration: "Nov '23 — May '25",
            description: "Brought 5+ sponsorships for MLSC's flagship hackathon event.",
            tags: ["Leadership", "Management"]
        }
    ];

    return (
        <section id="experience" className="section container">
            <h2 className="section-title">Experience</h2>

            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <div className="exp-header">
                                <h3>{exp.role}</h3>
                                <span className="company">@ {exp.company}</span>
                            </div>
                            <span className="duration">{exp.duration}</span>
                            <p className="exp-desc">{exp.description}</p>
                            <div className="exp-tags">
                                {exp.tags.map(tag => (
                                    <span key={tag} className="tag-xs">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          position: relative;
          display: inline-block;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 60px;
          height: 4px;
          background: var(--accent-primary);
          border-radius: 2px;
        }

        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding-left: 2rem;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 2px;
          background: var(--border-color);
        }

        .timeline-item {
          position: relative;
          padding-bottom: 3rem;
        }

        .timeline-item:last-child {
          padding-bottom: 0;
        }

        .timeline-dot {
          position: absolute;
          left: -2.35rem; /* Adjust based on padding-left and dot size */
          top: 0.5rem;
          width: 12px;
          height: 12px;
          background: var(--bg-primary);
          border: 2px solid var(--accent-primary);
          border-radius: 50%;
          z-index: 1;
        }

        .timeline-content {
          background: var(--bg-card);
          padding: 1.5rem;
          border-radius: 12px;
          border: 1px solid var(--border-color);
          transition: var(--transition-fast);
        }

        .timeline-content:hover {
          border-color: var(--accent-primary);
          transform: translateX(5px);
        }

        .exp-header h3 {
          font-size: 1.25rem;
          margin-bottom: 0.25rem;
          color: var(--text-primary);
        }

        .company {
          font-size: 1rem;
          color: var(--text-accent);
          font-weight: 500;
        }

        .duration {
          display: block;
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
          font-family: monospace;
          margin-top: 0.25rem;
        }

        .exp-desc {
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .exp-tags {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .tag-xs {
          font-size: 0.75rem;
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          background: var(--bg-secondary);
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
        }
      `}</style>
        </section>
    );
};

export default Experience;
