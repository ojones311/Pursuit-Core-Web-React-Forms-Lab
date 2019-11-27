import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.initialState = {
      inputNumbers:[],
      operand: ''
    }
    this.state = this.initialState
  }

handleNumberArray = (event) => {
  console.log(event.target.value)
  this.setState({
    inputNumbers: [event.target.value]
  })
}

handleOperands = (event) => {
  this.setState({
    operand: event.target.value
  })
}

handleFormSubmit = (event) => {
  const {inputNumbers, operand} = this.state
  event.preventDefault()
  console.log(inputNumbers, operand)

  if(operand === 'sum'){
    let reducedInpNum = inputNumbers.reduce((a,b) => a + b)
    console.log(reducedInpNum)
  }
}

  render() {
    return (
      <div className="App">
        <div>
        <h2>Enter each number in the array, separated by a ',' </h2>
        </div>
        <form onSubmit={this.handleFormSubmit}>
        <div>
          <input
          type= 'text'
          placeholder= 'Enter numbers here'
          onChange= {this.handleNumberArray}
          > 
          </input>
        </div>
        <div>
          <select id= 'operand'
            onChange= {this.handleOperands}
          >
            <option></option>
            <option>sum</option>
            <option>average</option>
            <option>mode</option>
          </select>
        </div>
        <div>
          <button>Calculate</button>
        </div>
        </form>
      </div>
    );
  }

  }
  

export default App;
