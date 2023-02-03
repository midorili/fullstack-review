import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import RepoListEntry from './components/RepoListEntry.jsx';



const App = () => {

  const [repos, setRepos] = useState([]);


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
      }
    })

    $.ajax({
      type: "GET",
      url: 'http://localhost:1128/repos',
      data: {
        query: term
      },
      success: (data) => {
        console.log('successInGet', data)
        setRepos(data)
      }
    })

  }

  return (
    <div>
      <h1>Github Fetcher</h1>
      <RepoList repos={repos} />
      <Search onSearch={search} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));