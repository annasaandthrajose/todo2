import './App.css';
import { Component } from 'react';
import { Button } from '@mui/material';
import Todo from './component/Todo';
class App extends Component {
  state = {
    myString: "Red",
    myStringOne: "World"
  }
  handleChange = () => {
    this.setState({ myString: "yellow" })
  }
  //NOTE
  // using handleChange with normal function 
  // <Button onClick = {this.handleChange.bind(this)}> Change value</Button >
  // 2.  using handleChange with arrow function,which handle "this"
  //   < Button onClick = { this.handleChange } > Change value</ >
  //NOTE
  //Noramal function
  //       handleChange() {
  //   this.setState({ myString: "yellow" });
  // }
  //Noramal function
  render() {
    return (
      <div className="App">
        <h1>Book Colour is {this.state.myString}</h1>
        <Button onClick={this.handleChange}>Change value</Button>
        <Todo myStringValues={this.state} />
      </div>
    );
  }
}
export default App;
