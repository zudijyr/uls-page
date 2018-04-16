import React, { Component } from 'react';

class PodButton extends Component {
  render() {
    return (
      <div>
	  	<p>
        {this.props.info}
        <button onClick={this.props.onClick}>View a cargo pod</button>
		</p>
      </div>
    );
  }
}

export default PodButton;

class HomeButton extends Component {
  render() {
    return (
      <div>
	  	<p>
        {this.props.info}
        <button onClick={this.props.onClick}>Home</button>
		</p>
      </div>
    );
  }
}

export { HomeButton };
