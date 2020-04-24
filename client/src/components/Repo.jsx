import React from 'react';

const Repo = (props) => (
  <tr>
    <td>{props.repo.name}</td>
    <td>{props.repo.owner_login}</td>
    <td>{props.repo.html_url}</td>
    <td>{props.repo.forks}</td>
  </tr>
)
export default Repo;