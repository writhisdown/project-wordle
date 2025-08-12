import React from 'react';
import styles from './styles.module.scss';
import ErrorMessage from '../ErrorMessage';

function GuessInput({ handleSubmittedGuesses, gameStatus }) {
  const [guessValue, setGuessValue] = React.useState('');
  const [error, setError] = React.useState(false);

  const EMPTY_TEXT = 'This field cannot be empty';
  const INVALID_TEXT = 'This field should have no more and no less than five characters';

  const errorText = guessValue === '' ? EMPTY_TEXT : INVALID_TEXT;
  
  function handleInput(event) {
    const inputValue = event.target.value;
    
    setGuessValue(inputValue.toUpperCase());
        
    if (inputValue.length === 5) {
      setError(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    handleSubmittedGuesses(guessValue);

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
        disabled={gameStatus !== 'running'}
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