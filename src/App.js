
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
  constructor(){
    super()
    this.state = {
      
      title: 'hello from BridgeLabz'
    }
  }
  render(){
    return(
      <div className = 'menu'>
        <h1>{this.state.title}</h1>
        <img  src={logo} alt="Invalid pic" />
      </div>
    )
  }
}

export default App;
