import React from 'react'; // , { useState }
import about from './assets/GroovyDoodle.svg';
import image from './assets/MessyDoodle.svg';
import features from './assets/RollingDoodle.svg';
import play from './assets/playstore.svg';
import logoLight from './assets/logo.light.svg';
import './App.scss';
import Button from './components/button/Button';
import Navigation from './components/navigation/Navigation';
import { RandomEmojii } from './components/random-emojii/random-emojii';

const App: React.FC = () => {
  window.addEventListener('mousemove', ({ clientX, clientY }) => {
    if (window.innerWidth <= 1010) return;
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
          <Button scrollAnchor="#about">LEARN MORE</Button>
        </div>
        <div className="image">
          <div className="image-hover-wrapper" id="image">
            <img draggable={false} src={image} alt="messy person" />
          </div>
        </div>
      </header>
      <section id="about" className="section about">
        <div className="section-image">
          <img draggable={false} src={about} alt="about the app" />
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
        <div className="drop"></div>
        <div className="section app-features">
          <div className="device-wrapper">
            <div className="device">
              <div className="camera"></div>
              <div className="speaker top"></div>
              <div className="screen">
                <img src={features} alt="feature doodle" />
              </div>
              <div className="speaker bottom"></div>
            </div>
          </div>
          <div className="info">
            <div className="feature-card">
              <h3>Features</h3>
              <hr />
              <ul className="features-list">
                <li className="feature">
                  <span className="point">{RandomEmojii()}</span>
                  <p>Take your notes everywhere.</p>
                </li>
                <li className="feature">
                  <span className="point">{RandomEmojii()}</span>
                  <p>
                    Keep your notes safe with Notyfi<sup>&copy;</sup>.
                  </p>
                </li>
                <li className="feature">
                  <span className="point">{RandomEmojii()}</span>
                  <p>
                    Keep your notes organised with our powerful search engine.
                  </p>
                </li>
                <li className="feature">
                  <span className="point">{RandomEmojii()}</span>
                  <p>No app downloads needed.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section getapp" id="getapp">
        <div className="icon">
          <img draggable={false} src={play} alt="playstore" />
        </div>
        <div className="joke">
          <h3>Want the app?</h3>
          <p>
            Well, you won't find it on the playstore (or any other app store for
            that matter). Our app is a PWA which means all you have to do is
            visit the url that it lives on and you're good to go.
          </p>
          <div className="action">
            <Button href="#top">Go to the app</Button>
          </div>
        </div>
      </section>
      <footer>
        <div className="drop"></div>
        <div className="content">
          <div className="logo">
            <img draggable={false} src={logoLight} alt="Light Logo" />
            <span>NOODLE</span>
          </div>
          <div className="copywrite">
            &copy; The Noodle App Company {new Date().getFullYear()}. All Rights
            Reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
