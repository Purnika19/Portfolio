const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="copyright">
                    <p>&copy; {new Date().getFullYear()} Purnika Malhotra. All rights reserved.</p>
                </div>
                <div className="footer-links">
                    <span className="made-with">Built with React & Vanilla CSS</span>
                </div>
            </div>

            <style jsx>{`
          .footer {
            border-top: 1px solid var(--border-color);
            padding: 2rem 0;
            margin-top: 4rem;
            background: var(--bg-secondary);
          }
  
          .footer-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: var(--text-secondary);
            font-size: 0.9rem;
          }
  
          .made-with {
            opacity: 0.7;
          }
  
          @media (max-width: 768px) {
            .footer-content {
              flex-direction: column;
              gap: 1rem;
              text-align: center;
            }
          }
        `}</style>
        </footer>
    );
};

export default Footer;
