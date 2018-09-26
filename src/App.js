import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    inputValue: ''
  }

  changeTextHandler = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  removeCharHandler = (index) => {
    const text = this.state.inputValue.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({inputValue: updatedText});
  }

  render() {
    const charArray = this.state.inputValue.split("").map((char, index) => {
        return <Char key={index} char={char} clicked={() => this.removeCharHandler(index)}/>
    });

    const styleI = {
      padding: '7px',
      margin: '20px auto',
      fontSize: '19px'
    }
    return (
      <div className="App">
        <input
          style={styleI} 
          type="text"
          onChange={this.changeTextHandler}
          value={this.state.inputValue} autoFocus/>
        <p>{this.state.inputValue.length}</p>
        <Validation length={this.state.inputValue.length}/>
        {charArray}
      </div>
    );
  }
}

export default App;
