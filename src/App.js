import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PodButton, { HomeButton } from './Components/Buttons';
import cargo_cap_system from './cargo_cap.jpg';
import cargo_cap_pod from './cargo_cap_pod.jpg';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      view: 0
    };
  }

  handleClick(i) {
    this.setState({
      view: i
    });
  }
  switchView() {
    if(this.state.view === 0) {
      return( <PodButton onClick={this.handleClick(1)} /> )
    } else if (this.state.view === 1) {
      return( <HomeButton onClick={this.handleClick(0)} /> )
    }
  }
  render() {
    console.log(this)
  document.title = "Charlie Pye's Urban Logistics Systems Page"
    if(this.state.view === 0) {
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Tunnels to the Caves of Steel</h1>
        </header>
        <img src={cargo_cap_system} className="cargoCapPic" alt="cargo cap visualization" />
  		<div className="App-body">
			<div id="index" className="box">
				<p> I want to learn web programming, specifically react.js</p> 
				<p> But I also want to write about:</p>
				<ol> 
					  <li>urban cargo transport</li>
					  <li>underground logistics systems</li>
					  <li>tunneling technology</li>
				</ol>
			</div>
			<div className="link">
			The image on the right and the concept comes from <a href="http://www.cargocap.com">Cargo Cap</a>
			, a German research group exploring the concept.

			<PodButton onClick={i => this.handleClick(1)} />
			</div>
  		</div>
      </div>
    );
    } else if (this.state.view === 1) {
		return (
      <div className="App">
        <img src={cargo_cap_pod} className="cargoCapPod" alt="cargo cap pod visualization" />
		<div className="link">
		<p> The pod shown here would hold two standard-sized pallets of roughly 1 cubic meter each.</p>
		<p> They could automatically unload themselves from the pod, minimizing time spent at each station.</p>
         <HomeButton onClick={i => this.handleClick(0)} />
		</div>
      </div>
	  );
	}
  }
}

export default App;
