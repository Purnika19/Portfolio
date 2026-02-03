const Projects = () => {
  const projects = [
    {
      title: "CareGPT",
      description: "RAG-based medical assistant using Langchain and Pinecone. Features OCR for converting handwritten prescriptions into structured insights.",
      tags: ["Python", "Langchain", "AWS", "Flask", "OCR"],
      github: "https://github.com/Purnika19/CareGPT",
      demo: null
    },
    {
      title: "Schemely",
      description: "End-to-end web platform recommending government schemes based on user needs. Recommendation logic via Flask/Node.js.",
      tags: ["React", "Node.js", "Flask", "Render"],
      github: "https://github.com/Purnika19/Schemely-Govt-Schemes-Recommender",
      demo: "https://schemely.netlify.app/"
    },
    {
      title: "PlantPulse",
      description: "Plant health detection system using CNNs (Deep Learning). Classifies plants as healthy or diseased from user uploaded photos.",
      tags: ["Python", "Deep Learning", "CNN", "Hugging Face"],
      github: "https://github.com/Purnika19/PlantPulse-AI-Based-Plant-Disease-Detector",
      demo: null // The user provided a GitHub link in place of the live site for one instance, but clarified the live site separately? Re-reading: "website live on : https://github.com/Purnika19/PlantPulse-AI-Based-Plant-Disease-Detectorhttps://plantpulse-ai.netlify.app/" -> It seems like a copy paste error concatenating the two. I will extract the valid URL.
    },
    {
      title: "TOPSIS Package",
      description: "Python package implementing the TOPSIS decision-making algorithm for multi-criteria ranking. Available on PyPi.",
      tags: ["Python", "PyPi", "Algorithms"],
      github: null,
      demo: "https://pypi.org/project/topsis-purnika-102303412/1.0.2/"
    }
  ];

  // Correction for PlantPulse demo link based on user input analysis
  // User input: "website live on : https://github.com/Purnika19/PlantPulse-AI-Based-Plant-Disease-Detectorhttps://plantpulse-ai.netlify.app/"
  // I will use https://plantpulse-ai.netlify.app/
  projects[2].demo = "https://plantpulse-ai.netlify.app/";

  return (
    <section id="projects" className="section container">
      <h2 className="section-title">Featured Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="card-header">
              <h3>{project.title}</h3>
              <div className="links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="GitHub Repo">
                    <span>GH</span>
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="Live Demo">
                    <span>↗</span>
                  </a>
                )}
              </div>
            </div>
            <p className="project-desc">{project.description}</p>
            <div className="project-tags">
              {project.tags.map(tag => (
                <span key={tag} className="tag-sm">{tag}</span>
              ))}
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
  
          .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 2rem;
          }
  
          .project-card {
            background: var(--bg-card);
            padding: 2rem;
            border-radius: 16px;
            border: 1px solid var(--border-color);
            transition: var(--transition-smooth);
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: hidden;
          }
  
          .project-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: var(--accent-primary);
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.3s ease;
          }
  
          .project-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 10px 30px -15px rgba(0,0,0,0.5);
          }
  
          .project-card:hover::before {
            transform: scaleX(1);
          }
  
          .card-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 1rem;
          }
  
          .card-header h3 {
            font-size: 1.5rem;
            color: var(--text-primary);
          }
  
          .links {
            display: flex;
            gap: 0.5rem;
          }

          .icon-link {
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            border: 1px solid var(--border-color);
            color: var(--text-secondary);
            font-size: 0.8rem;
            font-weight: 600;
            transition: var(--transition-fast);
          }
  
          .icon-link:hover {
            border-color: var(--accent-primary);
            color: var(--accent-primary);
            background: rgba(56, 189, 248, 0.1);
          }
  
          .project-desc {
            color: var(--text-secondary);
            margin-bottom: 1.5rem;
            flex-grow: 1;
            font-size: 1rem;
            line-height: 1.6;
          }
  
          .project-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
          }
  
          .tag-sm {
            font-size: 0.8rem;
            color: var(--accent-primary);
            padding: 0.25rem 0.75rem;
            background: rgba(56, 189, 248, 0.1);
            border-radius: 12px;
            font-weight: 500;
          }
  
          @media (max-width: 480px) {
            .projects-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
    </section>
  );
};

export default Projects;
