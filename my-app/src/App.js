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
let color ;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {appear: true, color: 'black', clicked: false};
  }

  toggle = () => {
    this.setState((state, props) => ({
      appear: !state.appear
    }));
  }

  changeColor = (event) => {
    this.setState({color: event.target.value});
  }

  changeColorClick = () => {
    this.setState({clicked: true});
  }

  render() {
    let display ;
    if(this.state.appear == true)
    {
      display = 'block';
    }
    else
    {
      display = 'none';
    }
    if(this.state.clicked == true)
    {
      color = this.state.color;
      this.state.clicked = false;
    }

    return (
      <div>
        <button onClick={this.toggle}>
          Toggle
        </button>
        <div style={{display: display }}>
          <br />
          <br />
          <input type="text" value={this.state.color} onChange={this.changeColor}/>
          <button onClick={this.changeColorClick}>
            Change Color
          </button>
          <br />
          <br />
          <p style={{color: color}}>Text....</p>
        </div>
      </div>
    );
  }
}

export default App;
