import React, { Component } from 'react';
import './App.css';


// class App extends Component {
//   render() {
//
//   }
// }

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }
//
// function App() {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//   );
// }

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

class Toggle extends Component {

  handleClick = () => {
    this.props.onClick();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          Toggle
        </button>
      </div>
    );
  }
}

class Color extends Component {

  handleClick = () => {
    this.props.onColorChange(document.getElementById('input').value);
  }

  render() {
    return (
      <div>
        <input id="input" type="text"/>
        <button onClick={this.handleClick}>
          Change Color
        </button>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {display: 'block'};
  }

  toggle = () => {
    if (this.state.display == 'block')
    {
      this.setState({display: 'none'});
    }
    else
    {
      this.setState({display: 'block'});
    }
  }

  changeColor = (color) => {
    document.getElementById('label').style.color = color;
  }

  render() {
    return (
      <div>
        <Toggle onClick={this.toggle} />
        <div style={{display: this.state.display}}>
          <br />
          <br />
          <Color onColorChange={this.changeColor} />
          <br />
          <br />
          <p id="label" >Text....</p>
        </div>
      </div>
    );
  }
}

export default App;
