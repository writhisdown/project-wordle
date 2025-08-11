import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import StatusBanner from '../StatusBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [resultsList, setResultsList] = React.useState([]);
  const [bannerVisible, setBannerVisible] = React.useState(false);

  const attempts = resultsList.length;

  const isCorrect = resultsList.find((result) => result === answer);

  const winner = !!(attempts <= NUM_OF_GUESSES_ALLOWED && isCorrect);

  return (
    <>
      <GuessResults results={resultsList} answer={answer} />
      <GuessInput
        resultsList={resultsList}
        setResultsList={setResultsList}
        answer={answer}
        setBannerVisible={setBannerVisible}
      />
      <StatusBanner
        isVisible={bannerVisible}
        gameStatus={winner}
        attempts={attempts}
        answer={answer}
      />
    </>
  );
}

export default Game;
