
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
      userName: '',
      nameError: ''
    }
  }
  onClick = ($event) => {
    window.open(this.url,"_blank");
  }

  onNameChange = ($event) => {
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    this.setState({ userName: $event.target.value})
    if (nameRegex.test($event.target.value || this.setState.userName==='')){
      this.setState({ nameError: ''})
    } else{
      this.setState({nameError: 'Name is Incorrect'})
    }
  }
  render(){
    return(
      <div>
      <div className = 'menu'>
        <h1>Hello {this.state.userName} from BridgeLabz</h1>
        <img  src={logo} onClick={this.onClick} alt="Invalid pic" />
      </div>
      <div className='name'>
        <input onChange = {this.onNameChange} />
        <span className="error-output">{this.state.nameError}</span>
      </div>
      </div>
    )
  }
}

export default App;
