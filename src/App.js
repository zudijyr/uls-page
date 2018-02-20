import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import cargo_cap from './cargo_cap.jpg';

class App extends Component {
  render() {
  document.title = "Charlie Pye's Urban Logistics Systems Page"
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Tunnels to the Caves of Steel</h1>
        </header>
        <img src={cargo_cap} className="cargoCapPic" alt="cargo cap visualization" />
  		<body className="App-body">
			<div id="index" className="box">
				<p> I want to learn web programming, specifically react.js</p> 
				<p> But I also want to write about:</p>
				<ol> 
					  <li>urban cargo transport</li>
					  <li>underground logistics systems</li>
					  <li>tunneling technology</li>
				</ol>
			</div>
			<div class="link">
			The image on the right and the concept comes from <a href="http://www.cargocap.com">Cargo Cap</a>
			, a German research group exploring the concept
			</div>
  		</body>
      </div>
    );
  }
}

export default App;
