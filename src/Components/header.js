import React from 'react';

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="strip">
        <div className="left">
          <div className="home" onClick={() => window.scrollTo(0, 0)}>
            <i className="fas fa-home"></i> Home
          </div>
        </div>
        <div className="right">
          <button onClick={() => scrollToSection('projects')}>
            <i className="fas fa-code"></i> Projects
          </button>
          <button onClick={() => scrollToSection('work')}>
            <i className="fas fa-briefcase"></i> Work
          </button>
          <button onClick={() => scrollToSection('contact')}>
            <i className="fas fa-id-card"></i> Contact
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
