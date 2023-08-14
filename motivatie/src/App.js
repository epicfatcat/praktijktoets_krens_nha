import './App.css';
import Quote from 'inspirational-quotes';
import React from 'react';

function App() {
	function refreshPage() {
		window.location.reload(false);
	}

  return (
    <div className="App">
			<p>{Quote.getRandomQuote()}</p>

			<button onClick={refreshPage}>Nieuwe quote</button>
    </div>
  );
}

export default App;
