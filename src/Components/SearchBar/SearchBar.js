import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class SearchBar extends Component {

  handleSubmit(e) {
    console.log(this.props)
    e.preventDefault()
    const search = e.target.elements.searchbar.value;
    console.log(search)
    e.target.reset()
    this.props.history.push(`/products?search=${search}`)
  }

  render() {
    
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input name='searchbar'/>
        <button type="submit">SEARCH</button>
      </form>
    )
  }
}

export default withRouter(SearchBar)