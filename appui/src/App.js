import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {ratingContract} from "./setup";
import {ShowMovies} from "./ShowMovies";

class App extends Component {
  constructor(props) {
    super(props);



    this.state = {
      movies: [{name: 'Star Wars', rating: 0}, {name: 'Avatar', rating: 0}, {name: 'Inception', rating: 0}]
    };
    this.handleVoting = this.handleVoting.bind(this)
  }

  componentDidMount(){
    console.log('rating contract', ratingContract);
    let movies = ratingContract.getMovies();
    console.log('movies', movies);
  }

  handleVoting(movie) {
    console.log('movie', movie);
    ratingContract.voteForMovie(movie);
    let votes = Number(ratingContract.totalVotesFor(movie));
    console.log('votes', votes);

    let updatedMovies = this.state.movies.map(el => {
      if (el.name === movie) {
        return {
          ...el,
          rating: votes
        }
      } else {
        return el;
      }
    });

    this.setState({
      movies: updatedMovies
    });

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to Ethereum</h1>
        </header>
        <p className="App-intro">
          Movie Rating Application in Ethereum and React
        </p>
        <div className="movie-table">
          <ShowMovies movies={this.state.movies} vote={this.handleVoting}/>
        </div>
      </div>
    );
  }
}

export default App;