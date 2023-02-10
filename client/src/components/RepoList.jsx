import React from 'react';
import RepoListEntry from '../components/RepoListEntry.jsx';

const RepoList = ({ repos }) => {
  return (
    <div className="repos">
      <h4> Repo List Component </h4>
      Here are your {repos.length} repos:
      {repos.map((repo) => (

        <div>
          < RepoListEntry key={repo._id} repo={repo} />
        </div>

      ))}
    </div >
  )
}

export default RepoList;