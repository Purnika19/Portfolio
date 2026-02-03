const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      items: ["C/C++", "HTML/CSS", "JavaScript", "Python", "SQL", "R"]
    },
    {
      title: "Libraries & ML",
      items: ["Pandas", "PyTorch", "OpenCV", "Numpy", "TensorFlow", "Keras", "Scikit-learn", "React", "CNN", "LangChain", "LLM", "RAG"]
    },
    {
      title: "Tools & Platforms",
      items: ["Git/GitHub", "VS Code", "AWS", "Docker", "Flask", "Node.js", "Jupyter", "Hugging Face", "Render", "Netlify"]
    },
    {
      title: "Core Concepts",
      items: ["Data Structures", "OOP", "DBMS", "Operating Systems", "Deep Learning", "Machine Learning", "AI", "Data Science", "Agile Development", "SCRUM", "Computer Networks", "System Design"]
    }
  ];

  return (
    <section id="skills" className="section container">
      <h2 className="section-title">Technical Skills</h2>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card">
            <h3>{category.title}</h3>
            <div className="skill-tags">
              {category.items.map((skill) => (
                <span key={skill} className="tag">{skill}</span>
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
  
          .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
          }
  
          .skill-card {
            background: var(--bg-card);
            padding: 2rem;
            border-radius: 16px;
            border: 1px solid var(--border-color);
            transition: var(--transition-fast);
          }
  
          .skill-card:hover {
            transform: translateY(-5px);
            border-color: var(--accent-primary);
          }
  
          .skill-card h3 {
            margin-bottom: 1.5rem;
            font-size: 1.25rem;
            color: var(--text-primary);
          }
  
          .skill-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.75rem;
          }
  
          .tag {
            background: rgba(255, 255, 255, 0.05);
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-size: 0.9rem;
            color: var(--text-secondary);
            border: 1px solid transparent;
            transition: var(--transition-fast);
          }
  
          .skill-card:hover .tag {
            background: rgba(56, 189, 248, 0.1);
            color: var(--accent-primary);
            border-color: rgba(56, 189, 248, 0.2);
          }
        `}</style>
    </section>
  );
};

export default Skills;
