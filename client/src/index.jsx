import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';


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
      success: (data) => {
        console.log('success', data)
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