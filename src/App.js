import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';

class App extends Component {

  state = {
    quotes: []
  }

  getQuotes = () => {
    Axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json').then(response => {
      const quotes = response.data.quotes
      this.setState({
        quotes
      })
    })
    .catch( error => {
      console.log(error)
    })
  }

  showSingleQuote = () => {
    let quotes = this.state.quotes
    console.log(quotes[0])
    return quotes.map( quote => {
      return (
        <React.Fragment>
          <div id="text">{quote.quote}</div>
          <div id="author">{quote.author}</div>
        </React.Fragment>
      )
    })
  }

  componentDidMount() {
    this.getQuotes()
  }

  render() {
    return (
      <div className="App">
        <div id="quote-box">
          { this.showSingleQuote() }
          <button id="new-quote">New Quote</button>
          <button id="tweet-quote">Tweet</button>
        </div>
      </div>
    );
  }
}

export default App;
