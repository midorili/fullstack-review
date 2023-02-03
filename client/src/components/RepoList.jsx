import React from 'react';
import RepoListEntry from '../components/RepoListEntry.jsx';

const RepoList = ({ repos }) => (
  <div className="repo-list">
    <h4> Repo List Component </h4>
    Here are your {repos.length} repos:
    {repos.map((repo) => (

      <div>
        < RepoListEntry repo={repo} />
      </div>

    ))}
  </div >

)

export default RepoList;