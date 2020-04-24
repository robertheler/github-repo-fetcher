import React from 'react';
import Repo from './Repo.jsx';
const repos = ['a', 'b', 'c'];

const RepoList = (props) => {
  let top25 = props.repos.slice(0, 25);
  return <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos. Here are the top 25 ranked by forks:
    <br></br>
    <table>
      <tr>
        <th>Name</th>
        <th>Owner</th>
        <th>URL</th>
        <th>Forks</th>
      </tr>
      {top25.map(item => <Repo repo={item} />)}
    </table>
  </div>
}



export default RepoList;