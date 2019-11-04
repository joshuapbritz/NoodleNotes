import React from 'react';
import image from './assets/GroovyDoodle.svg';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="inner">
        <div className="content"></div>
        <div className="image">
          <img src={image} alt="A person" />
        </div>
      </div>
    </div>
  );
};

export default App;
