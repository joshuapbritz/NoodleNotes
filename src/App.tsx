import React from 'react'; // , { useState }
import image from './assets/GroovyDoodle.svg';
import about from './assets/MessyDoodle.svg';
import './App.scss';
import Button from './components/button/Button';
import Navigation from './components/navigation/Navigation';

const App: React.FC = () => {
  window.addEventListener('mousemove', ({ clientX, clientY }) => {
    const image = document.getElementById('image');
    if (!!image) {
      const x = clientX - window.innerWidth / 2;
      const y = clientY - window.innerHeight / 2;
      image.style.transform = `translate3d(${(x / 40) * -1}px, ${(y / 40) *
        -1}px, 0)`;
    }
  });

  return (
    <div className="App" id="top">
      <Navigation></Navigation>
      <header className="header">
        <div className="content">
          <h1 className="underline">Noodle</h1>
          <h4>The note taking app of your future.</h4>
          <br />
          <Button>LEARN MORE</Button>
        </div>
        <div className="image">
          <div className="image-hover-wrapper" id="image">
            <img draggable={false} src={image} alt="A person" />
          </div>
        </div>
      </header>
      <section id="about" className="section about">
        <div className="section-image">
          <img src={about} alt="messy dude" />
        </div>
        <div className="card-row">
          <div className="card">
            <h4 className="underline" style={{ marginBottom: '5px' }}>
              Cloud Based
            </h4>
            <p>
              So your notes go where you go. With our next gen servers and high
              speed transfer speeds, you will alway have your notes with you.
            </p>
          </div>
          <div className="card">
            <h4 className="underline" style={{ marginBottom: '5px' }}>
              Intuitive Editor
            </h4>
            <p>
              Our next level note editor makes it a breeze to take new notes and
              modify old ones. Combining the best our traditional text editors
              and our own personal flare, we created a way of taking notes that
              everyone will love.
            </p>
          </div>
          <div className="card">
            <h4 className="underline" style={{ marginBottom: '5px' }}>
              Next Level Organization
            </h4>
            <p>
              Easily search, sort, categorize, and group your notes so that you
              never lose what's important to you. Our refined filtering engine
              gives you absolute contorl of your notes.
            </p>
          </div>
        </div>
      </section>
      <section id="features" className="features">
        <div className="section">
          <ul className="feature-list">
            <li>Take your notes with you... Everywhere.</li>
            <li>Search and orgainise with ease.</li>
            <li>No app downloads needed.</li>
            <li>Ease-to-use, powerful editor.</li>
            <li>Share your notes with anyone.</li>
            <li>
              Lock your notes with notyfi<sup>&copy;</sup>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default App;
