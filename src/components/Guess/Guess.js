import styles from './styles.module.scss';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

const NUM_OF_CHARACTERS_ALLOWED = 5;

const numOfChars = range(NUM_OF_CHARACTERS_ALLOWED);


function Guess({ value, answer }) {
  const character = value ? value : '';

  const nextGuess = checkGuess(value, answer);

  const status = nextGuess?.map((item) => item?.status);

  return (
    <>
      <p className={styles.guess}>
        {numOfChars.map((char) => (
          <span 
            key={char} 
            className={`${styles.cell} ${status ? styles[`${status[char]}`] : ''}`}
            >
            {character[char]}
          </span>
        ))}
      </p>
    </>
  );
}

export default Guess;