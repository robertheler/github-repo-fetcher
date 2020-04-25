import React from 'react';
import Repo from './Repo.jsx';
const repos = ['a', 'b', 'c'];

const RepoList = (props) => {
  let top25 = props.repos.slice(0, 25);
  return <div>
    Currently, there are {props.repos.length} repos in the database. Here are the top 25 ranked by forks:
    <br></br>
    <table className="paleBlueRows">
      <thead>
        <tr>
          <th>Name</th>
          <th>Owner</th>
          <th>URL</th>
          <th>Forks</th>
        </tr>
      </thead>
      <tbody>
        {top25.map(item => <Repo repo={item} />)}
      </tbody>
    </table>
  </div>
}



export default RepoList;