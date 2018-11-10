import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';

class App extends Component {

  state = {
    quotes: [],
    content: "Life isn’t about getting and having, it’s about giving and being.",
    author: "Kevin Kruse"
  }

  getQuotes = () => {
    Axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then( response => {
      const quotes = response.data.quotes
      this.setState({
        quotes
      }, () => { this.showSingleQuote() })
    })
    .catch( error => {
      console.log(error)
    })
  }

  getRandomQuote = () => {
    return this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)];
  }

  showSingleQuote = () => {
    let quotes = this.getRandomQuote()
    this.setState({
      content: quotes.quote,
      author: quotes.author
    })
  }

  componentDidMount() {
    this.getQuotes()
  }

  render() {
    return (
      <div className="App">
        <div id="quote-box">
          <div>{ !this.state.content ? 'Loading' : this.state.content }</div>
          <div>{ !this.state.author ? 'Loading' : this.state.author }</div>
          <button id="new-quote" onClick={ this.showSingleQuote }>New Quote</button>
          <button id="tweet-quote">Tweet</button>
        </div>
      </div>
    );
  }
}

export default App;
