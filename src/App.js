
import './App.css';
import React from 'react';
import logo from './asset/addresspic.png';

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
  url='http://bridgelabz.com/'
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
        <img onClick={this.onClick} src={logo} alt="Invalid pic" />
      </div>
    )
  }
}

export default App;
