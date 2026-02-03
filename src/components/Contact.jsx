const Contact = () => {
  return (
    <section id="contact" className="section container">
      <div className="contact-wrapper">
        <div className="contact-text">
          <h2 className="section-title">Get In Touch</h2>
          <p>
            I'm currently looking for new opportunities and collaborations.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="contact-details">
            <a href="mailto:pmalhotra1_be23@thapar.edu" className="contact-item">
              <span className="icon">✉</span>
              <span>pmalhotra1_be23@thapar.edu</span>
            </a>
            <div className="contact-item">
              <span className="icon">📞</span>
              <span>+91 9399728593</span>
            </div>
          </div>

          <div className="social-links">
            <a href="https://github.com/Purnika19/" target="_blank" rel="noopener noreferrer" className="social-btn">GitHub</a>
            <a href="https://www.linkedin.com/in/purnika19/" target="_blank" rel="noopener noreferrer" className="social-btn">LinkedIn</a>
          </div>
        </div>

        <form className="contact-form" onSubmit={(e) => {
          e.preventDefault();
          const name = e.target.name.value;
          const email = e.target.email.value;
          const message = e.target.message.value;
          window.location.href = `mailto:pmalhotra1_be23@thapar.edu?subject=Portfolio Contact from ${name}&body=From: ${name} (${email})%0D%0A%0D%0A${message}`;
        }}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="your@email.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Something nice!" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>

      <style jsx>{`
          .contact-wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: start;
          }
  
          .section-title {
            font-size: 2.5rem;
            margin-bottom: 2rem;
            color: var(--text-primary);
          }
  
          .contact-text p {
            color: var(--text-secondary);
            margin-bottom: 2.5rem;
            font-size: 1.1rem;
          }
  
          .contact-details {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            margin-bottom: 3rem;
          }
  
          .contact-item {
             display: flex;
             align-items: center;
             gap: 1rem;
             color: var(--text-primary);
             font-size: 1.05rem;
          }
  
          .icon {
            color: var(--accent-primary);
            font-size: 1.2rem;
          }
  
          .social-links {
            display: flex;
            gap: 1rem;
          }
  
          .social-btn {
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            background: var(--bg-card);
            color: var(--text-primary);
            border: 1px solid var(--border-color);
            transition: var(--transition-fast);
          }
  
          .social-btn:hover {
            border-color: var(--accent-primary);
            color: var(--accent-primary);
            transform: translateY(-2px);
          }
  
          .contact-form {
            background: var(--bg-card);
            padding: 2.5rem;
            border-radius: 16px;
            border: 1px solid var(--border-color);
          }
  
          .form-group {
            margin-bottom: 1.5rem;
          }
  
          label {
            display: block;
            margin-bottom: 0.5rem;
            color: var(--text-primary);
            font-weight: 500;
          }
  
          input, textarea {
            width: 100%;
            padding: 0.75rem;
            background: var(--bg-secondary);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            color: var(--text-primary);
            font-family: var(--font-body);
            transition: var(--transition-fast);
          }
  
          input:focus, textarea:focus {
            outline: none;
            border-color: var(--accent-primary);
            box-shadow: 0 0 0 2px rgba(56, 189, 248, 0.2);
          }
  
          @media (max-width: 768px) {
            .contact-wrapper {
              grid-template-columns: 1fr;
              gap: 3rem;
            }
          }
        `}</style>
    </section>
  );
};

export default Contact;
