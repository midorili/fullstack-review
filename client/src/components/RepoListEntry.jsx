import React from 'react';

const RepoListEntry = ({ repo }) => (
  <div className="repo-list">
    <div className="repo-name" > Name:{repo.name}   </div>
    <div className="repo-owner">Owner:{repo.owner}  </div>
    <div className="repo-link">Link:{repo.html_url}  </div>
    <div className="repo-star">Stargazers:{repo.stargazers_count}  </div>
  </div>
)

export default RepoListEntry;