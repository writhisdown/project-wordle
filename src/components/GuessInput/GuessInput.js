import React from 'react';
import styles from './styles.module.scss';
import ErrorMessage from '../ErrorMessage';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessInput({ resultsList, setResultsList }) {
  const [guessValue, setGuessValue] = React.useState('');
  const [error, setError] = React.useState(false);

  console.log(error)

  const EMPTY_TEXT = 'This field cannot be empty';
  const INVALID_TEXT = 'This field should have no more and no less than five characters';

  const errorText = guessValue === '' ? EMPTY_TEXT : INVALID_TEXT;
  
  function handleInput(event) {
    const inputValue = event.target.value;
    
    setGuessValue(inputValue.toUpperCase());
    
    console.log('input value length:', inputValue.length);
    
    if (inputValue.length === 5) {
      setError(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('guessed value:', guessValue);

    // const guessObj = {
    //   result: guessValue,
    //   id: crypto.randomUUID(),
    // }

    const guessResults = [...resultsList];

    if (guessResults.length >= NUM_OF_GUESSES_ALLOWED) {
      setGuessValue('');
      return;
    }
 
    // guessResults.push(guessObj);
    guessResults.push(guessValue);
    
    setResultsList(guessResults);

    setGuessValue('');
  }

  function handleError(event) {
    event.preventDefault();
    setError(true);
  }

  return (
    <form 
      className={styles['guess-input-container']} 
      onSubmit={handleSubmit}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        className={styles['guess-input']}
        id="guess-input"
        type="text" 
        value={guessValue}
        onChange={handleInput}
        pattern='[A-Z]{5,5}'
        required
        onInvalid={handleError}
      />
      <div className={styles['guess-input__error-container']}>
        {error && (
          <ErrorMessage
            message={errorText}
            style={{'--error-state-bg': 'var(--color-error-100)'}}
          />
        )}
      </div>
    </form>
  )
}

export default GuessInput;