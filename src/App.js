import React from 'react';
import Main from './components/Main'
import Head from './components/Head/'

function App() {
  return (
    <div className="App">
    	<header>
    		<Head />
    	</header>
      <div>
        <Main />
      </div>
    </div>
  );
}

export default App;
