import React from 'react';

function GuessResults({ results }) {
  return (
    <div className='guess-results'>
      {results.map(({result, id}) => (
        // console.log('result text:', result);
        <p key={id} className="guess">{result}</p>
      ))}
    </div>
  );
}

export default GuessResults;
