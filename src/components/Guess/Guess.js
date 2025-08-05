import React from 'react';
import styles from './styles.module.scss';
import { range } from '../../utils';

const NUM_OF_CHARACTERS_ALLOWED = 5;

const numOfChars = range(NUM_OF_CHARACTERS_ALLOWED);

function Guess({ value }) {
  const character = value ? value : '';

  console.log('value:', value)

  return (
    <>
      <p className={styles.guess}>
        {numOfChars.map((char) => (
          <span key={char} className={styles.cell}>
            {character[char]}
          </span>
        ))}
      </p>
    </>
  );
}

export default Guess;