import React from 'react';
import ReactDOM from 'react-dom';

const RepoListEntry = ({ repo }) => (
  <div class="repo-list">
    {/* <div className="repo-name" > Name:{repo.name}   </div>
    <div className="repo-owner">Owner:{repo.owner}  </div> */}
    <div className="repo-link"><a target="_self" href={repo.html_url} >{repo.name}</a>
    </div>
    <div className="repo-star">Stargazers:{repo.stargazers_count}  </div>
  </div>
)

export default RepoListEntry;