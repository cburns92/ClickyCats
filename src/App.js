import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Cat from './components/Cat'
import Cats from './cats.json'
import './App.css';

class App extends Component {
  state = {
    score: 0,
    high: 0,
    cats: Cats,
    unselected: Cats
  }

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

  selectCat = alias => {
    if(this.state.unselected.find(cat => cat.alias === alias) === undefined){
      console.log(alias)
      console.log("Wrong!")
      this.setState({
        score: 0,
        high: (this.state.score > this.state.high) ? this.state.score : this.state.high,
        cats: Cats,
        unselected: Cats
      })
    }
    else {
      console.log("Right!")
      const newUnselected = this.state.unselected.filter(cat => cat.alias !== alias);
      this.setState({
        score: this.state.score + 1,
        cats: Cats,
        unselected: newUnselected
      })
    }


    this.shuffleArray(Cats)
  }

  render() {
    return (
      <div className="App">
        <Navbar
          score={this.state.score}
          high={this.state.high}
        />
        <div className="wrapper">
          {this.state.cats.map(cat => (
            <Cat
              alias={cat.alias}
              image={cat.image}
              selectCat={this.selectCat}
            />
          ))}
        </div>      
      </div>
    )
  }
}

export default App;
