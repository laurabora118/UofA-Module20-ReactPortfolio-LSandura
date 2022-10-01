import React from 'react';

const styles = {
  projectStyle: {
    background: '#70CE4E',
  },
  titleStyle: {
    background: '#CF4FC6',
  },
};

export default function Project() {
  return (
      <nav style={styles.projectStyle} className="projectsection">
      <div className="container">
      <div class="boxes">
      <ul>
        <h4 style={styles.titleStyle} className="card">Accessibility Challenge</h4>
        <ul><a href="https://github.com/laurabora118/UofA-Module1-AccessibilityChallenge-LSandura">GitHub</a></ul>
        <ul><a href="https://laurabora118.github.io/UofA-Module1-AccessibilityChallenge-LSandura/">Deployed Page</a></ul>
      </ul>
      <ul>
        <h4 style={styles.titleStyle} className="card">Html, Css, JavaScript Portfolio</h4>
        <ul><a href="https://github.com/laurabora118/UofA-Module2-ProfessionalPortfolio-LSandura">GitHub</a></ul>
        <ul><a href="https://laurabora118.github.io/UofA-Module2-ProfessionalPortfolio-LSandura/">Deployed Page</a></ul>      
      </ul>
      <ul>
      <h4 style={styles.titleStyle} className="card">Password Generator</h4>
        <ul><a href="https://github.com/laurabora118/UofA-Module3-PasswordGenerator-LSandura">GitHub</a></ul>
        <ul><a href="https://github.com/laurabora118/UofA-Module3-PasswordGenerator-LSandura/settings/pages">Deployed Page</a></ul>      
        </ul>
      <ul>
      <h4 style={styles.titleStyle} className="card">Api Code Quiz</h4>
        <ul><a href="https://github.com/laurabora118/UofA-Module4-APICodeQuiz-LSandura">GitHub</a></ul>
        <ul><a href="https://laurabora118.github.io/UofA-Module4-APICodeQuiz-LSandura/">Deployed Page</a></ul>      
        </ul>
      <ul>
      <h4 style={styles.titleStyle} className="card">Team Project 1</h4>
        <ul><a href="https://github.com/laurabora118/Project1TeamPluto">GitHub</a></ul>
        <ul><a href="https://laurabora118.github.io/Project1TeamPluto/">Deployed Page</a></ul>
        </ul>
      <ul>
      <h4 style={styles.titleStyle} className="card">Team Project 2</h4>
      <ul><a href="https://github.com/alexiaValen/Manticore">GitHub</a></ul>
      <ul><a href="https://glacial-sierra-66630.herokuapp.com">Deployed Heroku Page</a></ul>
      </ul>
      <ul>
      <h4 style={styles.titleStyle} className="card">Team Project 3</h4>
      <ul>Coming Oct 17th 2022</ul>
      </ul>
      <ul>
      <h4 style={styles.titleStyle} className="card">React Portfolio</h4>
      <ul><a href="https://github.com/laurabora118/uofa-module20-reactportfolio-lsandura">GitHub</a></ul>
      <ul><a href="https://github.com/laurabora118/uofa-module20-reactportfolio-lsandura/settings/pages">Deployed Page</a></ul>
      </ul>
      <ul>
      <h4 style={styles.titleStyle} className="card">Demo Day Project</h4>
      <ul>Coming Soon Dec 2022</ul>
      </ul>
      <ul>
      {/* <h4 style={styles.titleStyle} className="card">Additional Projects</h4>
      <ul>Coming Soon</ul> */}
      </ul>
      </div>
      </div>
      </nav>
  );
}

