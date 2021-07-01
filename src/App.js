
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
      userName: ''
    }
  }
  onClick = ($event) => {
    window.open(this.url,"_blank");
  }

  onNameChange = ($event) => {
    this.setState({ userName: $event.target.value})
  }
  render(){
    return(
      <>
      <div className = 'menu'>
        <h1>Hello {this.state.userName} from BridgeLabz</h1>
        <img  src={logo} onClick={this.onClick} alt="Invalid pic" />
      </div>
      <div>
        <input onChange = {this.onNameChange} />
      </div>
      </>
    )
  }
}

export default App;
