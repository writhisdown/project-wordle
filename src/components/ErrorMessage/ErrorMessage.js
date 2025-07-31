import React from 'react';
import styles from './styles.module.scss';

function ErrorMessage({ message, style = null }) {
  return (
    <div className={styles['error-message']} style={style} role='alert'>
      <span>{message}</span>
    </div>
  );
}

export default ErrorMessage;
