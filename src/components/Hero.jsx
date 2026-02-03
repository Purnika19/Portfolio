import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="text-content">
          <span className="greeting">Hello, I'm</span>
          <h1 className="name">Purnika<br />Malhotra</h1>
          <h2 className="title">Computer Engineering Student & <span className="highlight">ML/AI Enthusiast</span></h2>
          <p className="description">
            Building intelligent web solutions and exploring the frontiers of AI & Machine Learning.
            Passionate about transforming data into impactful applications.
          </p>

          <div className="cta-group">
            <a href="#projects" className="btn btn-primary">View Work</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>

        <div className="visual">
          <div className="glow-circle"></div>
          <div className="img-container">
            <img src={profileImg} alt="Purnika Malhotra" className="profile-img" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding-top: 80px;
          overflow: hidden;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          align-items: center;
          gap: 2rem;
        }

        .greeting {
          color: var(--accent-primary);
          font-weight: 600;
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          display: block;
        }

        .name {
          font-size: 5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          background: linear-gradient(to right, #fff, #9ca3af);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .title {
          font-size: 1.5rem;
          font-weight: 500;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .highlight {
          color: var(--text-primary);
          font-weight: 600;
        }

        .description {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 500px;
          margin-bottom: 2.5rem;
        }

        .cta-group {
          display: flex;
          gap: 1rem;
        }

        .visual {
          position: relative;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .glow-circle {
          position: absolute;
          width: 300px;
          height: 300px;
          background: var(--accent-primary);
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.2;
          animation: pulse 4s infinite alternate;
          z-index: 0;
        }

        .img-container {
            position: relative;
            z-index: 1;
            border-radius: 24px;
            overflow: hidden;
            width: 350px;
            height: 450px;
            border: 2px solid rgba(255, 255, 255, 0.1);
            transform: rotate(3deg);
            transition: var(--transition-smooth);
        }

        .img-container:hover {
            transform: rotate(0deg) scale(1.02);
            border-color: var(--accent-primary);
        }

        .profile-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        @keyframes pulse {
          0% { opacity: 0.15; transform: scale(0.9); }
          100% { opacity: 0.25; transform: scale(1.1); }
        }

        @media (max-width: 768px) {
          .hero {
             flex-direction: column-reverse; /* Ensure stacking context if needed */
          }

          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
          }

          .visual {
             display: flex; /* Show visual on mobile now that we have a photo */
             justify-content: center;
          }

          .img-container {
             width: 250px;
             height: 320px;
          }

          .name {
            font-size: 3.5rem;
          }

          .description {
            margin: 0 auto 2.5rem;
          }

          .cta-group {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
