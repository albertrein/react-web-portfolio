import React from 'react';
import Repos from './components/Repos/'
import Head from './components/Head/'
import About from './components/About/'
import Questions from './components/Questions/'
import './style.css'

function App() {
  return (
    <div className="App">
    	<header>
    		<Head />
    	</header>
      <div>
        <About />
      </div>
      <div>
        <h1 class="title">Meus Projetos</h1>
        <Repos />
      </div>
      <div>
        <Questions />
      </div>
    </div>
  );
}

export default App;
