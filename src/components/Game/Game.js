import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Banner from '../Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [numberOfAttempts, setNumberOfAttempts] = React.useState(0);
  const [gameStatus, setGameStatus] = React.useState('running');

  function handleSubmittedGuesses(guess) {
    const nextGuess = [...guessList, guess];
    const nextAttempt = nextGuess.length;

    setGuessList(nextGuess);
    setNumberOfAttempts(nextAttempt);

    if (guess === answer) {
      setGameStatus('win');
    } else if (nextAttempt >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  return (
    <>
      <GuessResults results={guessList} answer={answer} />
      <GuessInput
        handleSubmittedGuesses={handleSubmittedGuesses}
        gameStatus={gameStatus}
      />
      <Banner
        status={gameStatus}
        attempts={numberOfAttempts}
        answer={answer}
      />
    </>
  );
}

export default Game;
