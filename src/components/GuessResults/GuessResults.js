import React from 'react';
import Guess from '../Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ results }) {
  const numOfEmptyRows = NUM_OF_GUESSES_ALLOWED - results.length;

  console.log('results length:', results.length);
  console.log('empty rows:', numOfEmptyRows);

  return (
    <div className='guess-results'>
      {results.map((result, index) => (
        <Guess key={index} value={result} />
      ))}
      {range(numOfEmptyRows).map((row) => (
        <Guess key={`emptyRow-${row}`} value={''} />
      ))}
    </div>
  );
}

export default GuessResults;
