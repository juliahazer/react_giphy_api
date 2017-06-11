import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      results: []
    }
    this.lookupGiphys = this.lookupGiphys.bind(this);
    this.removeGiphys = this.removeGiphys.bind(this);
  }

  lookupGiphys(searchTerm) {
    var url = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC`;
    console.log(url);
    var results = this.state.results.slice();
    axios.get(url).then(data => {
      var imgUrl = data.data.data[0].images.fixed_width.url;
      results.push(
        <img key={imgUrl}
          className='giphyImg' 
          src={imgUrl} 
          alt={searchTerm}
        />
      )
      this.setState({results});
    });
  }

  removeGiphys() {
    var results = [];
    this.setState({results});
  }

  render() {
    var results = this.state.results.map((el)=> {
      return el
    });
    return (
      <div className="App">
        <h1>GIPHY PARTY</h1>
        <SearchForm lookupGiphys={this.lookupGiphys}/>
        <button 
          onClick={this.removeGiphys}
          id="removeBtn">
          Remove Images
        </button>
        <div id="results">
          {results.reverse()}
        </div>
      </div>
    );
  }
}

export default App;
