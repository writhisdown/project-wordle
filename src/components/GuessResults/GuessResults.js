import styles from './styles.module.scss';
import Guess from '../Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ results, answer }) {
  const numOfEmptyRows = NUM_OF_GUESSES_ALLOWED - results.length;

  return (
    <div className={styles['guess-results']}>
      {results.map((result, index) => (
        <Guess key={`guess-${index}`} value={result} answer={answer} />
      ))}
      {range(numOfEmptyRows).map((row) => (
        <Guess key={`emptyRow-${row}`} value={''} />
      ))}
    </div>
  );
}

export default GuessResults;
