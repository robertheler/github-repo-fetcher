import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }
  componentDidMount() {
    this.retrieve();
  }

  retrieve() {
    $.ajax({
      type: "GET",
      url: 'http://127.0.0.1:1128/repos',
      success: (topRepos) => {
        console.log(`From CLIENT: GET/repos was successful`);
        this.setState({repos: JSON.parse(topRepos)})
      },
      error: (err) => console.log(`From CLIENT: GET/repos was unsuccessful:`, err),
      dataType: 'text'
    });
  }
  search (term) {
    //console.log(`${term} was searched`);
    //send ajax to server
    $.ajax({
      type: "POST",
      url: 'http://127.0.0.1:1128/repos',
      data: {username:
        term
      },
      success: (response) => console.log(`From CLIENT: POST/${term} was successful`),
      error: (err) => console.log(`From CLIENT: POST/${term} was unsuccessful:`, err),
      dataType: 'text'
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));