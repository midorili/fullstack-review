import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import RepoListEntry from './components/RepoListEntry.jsx';



const App = () => {

  const [repos, setRepos] = useState([]);

  const pageLoad = () => {
    $.ajax({
      type: "GET",
      url: 'http://localhost:1128/repos',
      success: (data) => {
        console.log('successInGet', data)
        setRepos(data)
      },
      error: () => {
        console.log('error')
      }
    })
  }

  useEffect(() => {
    pageLoad();
  }, repos)


  const search = (term) => {
    console.log(`${term} was searched`)
    $.ajax({
      type: "POST",
      url: 'http://localhost:1128/repos',
      data: {
        term: term
      },
      success: (dataTerm) => {
        console.log('isItOctocat?', dataTerm)
        pageLoad();
      },
      error: () => {
        console.log('error')
      }
    })

  }


  return (
    <div className="repo-master">
      <h1>Github Fetcher</h1>
      <Search onSearch={search} />
      <RepoList repos={repos} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));