
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
      <div className="app-main">
      <div className ="main">
      <div>
        <h1>Hello {this.state.userName} from BridgeLabz</h1>
        <img  src={logo} onClick={this.onClick} alt="Invalid pic" />
      </div>
      <div className='text-box'>
        <input onChange = {this.onNameChange} />
        <span className="error-output">{this.state.nameError}</span>
      </div>
      <div>
        At BrideLabz we're a community of
        <ul>
          <li> Technologists</li>
          <li> Thinkers</li>
          <li> Builders</li>
        </ul>
        Working Together.......
        <br />
        <br />
        To know ,visit <a href='https://www.bridgelabz.com/' rel="noreferrer" target="_blank">BrideLabz</a>
        <br /> i.e <b>Employebility to all</b>
        </div>
      </div>
      </div>
    )
  }
}

export default App;
