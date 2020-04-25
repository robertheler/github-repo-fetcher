import React from 'react';

const Repo = (props) => (
  <tr>
    <td className="firstColumn">{(props.repo.name).charAt(0).toUpperCase() + (props.repo.name).slice(1)}</td>
    <td>{(props.repo.owner_login).charAt(0).toUpperCase() + (props.repo.owner_login).slice(1)}</td>
    <td><a href={"{props.repo.html_url}"}>{props.repo.html_url}</a></td>
    <td>{props.repo.forks}</td>
  </tr>
)
export default Repo;

//(props.repo.name).charAt(0).toUpperCase() + (props.repo.name).slice(1)