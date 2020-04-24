import React from 'react';
import Repo from './Repo.jsx';
const repos = ['a', 'b', 'c'];
const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos. Here are the top 25:
    <br></br>
    <div>{repos.map(item => <Repo repo={item} />)}</div>
  </div>
)


export default RepoList;