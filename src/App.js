import React from 'react';
import Repos from './components/Repos/'
import Head from './components/Head/'

function App() {
  return (
    <div className="App">
    	<header>
    		<Head />
    	</header>
      <div>
        <Repos />
      </div>
    </div>
  );
}

export default App;
