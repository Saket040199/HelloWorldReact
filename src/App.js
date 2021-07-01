
import './App.css';
import React from 'react';
import logo from './asset/bl.logo.png';

// class App extends React.Component{
//   render(){
//     return (
//       <div>
//         <h1>Hello From BridgeLabz</h1>
//       </div>
//     );
//   }
// }

class App extends React.Component{
  url = "https://www.bridgelabz.com/";
  constructor(){
    super()
    this.state = { 
      title: 'Hello from BridgeLabz'
    }
  }
  onClick = ($event) => {
    window.open(this.url,"_blank");
  }
  render(){
    return(
      <div className = 'menu'>
        <h1>{this.state.title}</h1>
        <img  src={logo} onClick={this.onClick} alt="Invalid pic" />
      </div>
    )
  }
}

export default App;
