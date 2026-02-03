const About = () => {
  return (
    <section id="about" className="section container">
      <h2 className="section-title">About Me</h2>

      <div className="about-content">
        <div className="bio">
          <p>
            I am a third-year <strong>Computer Engineering</strong> student at
            <strong> Thapar Institute of Engineering & Technology</strong>.
            My journey in tech is driven by a curiosity to understand how intelligent systems work
            and a passion for building them.
          </p>
          <p>
            I focus on <strong>Machine Learning</strong>, <strong>AI</strong>, and <strong>Python development</strong>, with a strong interest in building end-to-end intelligent systems. From data processing and model training to inference pipelines and real-world deployment, I enjoy working across the entire lifecycle of ML solutions. I have hands-on experience developing and deploying ML-driven applications using Python-based frameworks and cloud platforms, and I’m motivated by problems where intelligent models create measurable real-world impact.
          </p>
        </div>

        <div className="education-card">
          <h3>Education</h3>
          <div className="edu-item">
            <div className="year">2023 — 2027</div>
            <div className="school">Thapar Institute of Engineering & Technology</div>
            <div className="degree">B.E. in Computer Engineering</div>
            <div className="location">Patiala</div>
          </div>
        </div>
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

        .about-content {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 4rem;
        }

        .bio p {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-size: 1.05rem;
        }

        .bio strong {
          color: var(--text-primary);
        }

        .education-card {
          background: var(--bg-card);
          padding: 2rem;
          border-radius: 16px;
          border: 1px solid var(--border-color);
        }

        .education-card h3 {
          margin-bottom: 1.5rem;
          font-size: 1.25rem;
          color: var(--text-accent);
        }

        .year {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
          font-family: monospace;
        }

        .school {
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .degree {
          color: var(--text-secondary);
          margin-bottom: 0.25rem;
        }

        .location {
          font-size: 0.9rem;
          color: var(--text-secondary);
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
