import React, { useState } from 'react';

const Search = ({ onSearch }) => {

  const [term, setTerm] = useState('')

  const onChange = (e) => {
    setTerm(e.target.value);
    console.log('e', e.target.value)

  }

  const search = () => {
    onSearch(term);
    console.log('term', term)

  }

  return (
    <div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={term} onChange={onChange} />
      <button onClick={search}> Add Repos </button>
    </div>
  );
}

export default Search;