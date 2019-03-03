import React, { Component } from 'react';
import DogList from './DogList';
import Dog from './Dog';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      dogs:[]
    }
  }

  componentDidMount(){
    fetch("https://dog.ceo/api/breeds/image/random/10")
    .then((res) => res.json())
    .then((data)=>{
      this.setState({
        dogs: data.message
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h2>
          Welcome To Dog World
        </h2>
        <DogList dogs={this.state.dogs}/>
        <Dog/>
      </div>
    );
  }
}

export default App;
