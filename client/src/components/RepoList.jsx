import React from 'react';
import Repo from './Repo.jsx';
const repos = ['a', 'b', 'c'];

const RepoList = (props) => {
  let top25 = props.repos.slice(0, 25);
  return <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos. Here are the top 25 ranked by forks:
    <br></br>
    <div>{top25.map(item => <Repo repo={item} />)}</div>
  </div>
}



export default RepoList;