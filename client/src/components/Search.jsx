import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {

    document.getElementById('button').blur();
    this.props.onSearch(this.state.term);

  }

  render() {
    return (<div className="search">
      Enter a github username to add repos: <input value={this.state.terms} onChange={this.onChange}/>

      <button id="button" onClick={this.search}> Add Repos </button>
    </div>)
  }
}

export default Search;