import React, { Component } from 'react';
import './SearchForm.css';

class SearchFrom extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  addFocus() {
    this.input.focus();
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form className='SearchForm' onSubmit={(e) => {
        e.preventDefault();
        this.props.lookupGiphys(this.state.searchTerm);
        this.setState({
          searchTerm: ''
        })
        this.addFocus();
      }}>
        <input 
          onChange={this.handleChange}
          ref={el => this.input = el}
          type="text" 
          id="searchTerm"  
          name="searchTerm" 
          placeholder="Enter a search term" 
          value={this.state.searchTerm}
        />
        <input
          type="submit" 
          id="searchBtn" 
          value = "Search Giphy!"
        />
      </form>
    )
  }
}

export default SearchFrom;
