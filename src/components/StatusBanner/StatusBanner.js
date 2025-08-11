import React from 'react';
import styles from './styles.module.scss';

function StatusBanner({ isVisible, gameStatus, attempts, answer }) {
  const dialogRef = React.useRef();
  const dialogElement = dialogRef.current;

  React.useEffect(() => {
    if (!dialogElement) return;

    if (isVisible) {
      dialogElement?.showPopover();
    } else {
      dialogElement?.close();
    }
  }, [isVisible]);

  return (
    <dialog 
      popover=''
      ref={dialogRef}
      className={`${styles.banner} ${gameStatus ? styles.happy : styles.sad}`}
    >
      {gameStatus ? (
        <p>
          <span>Congratulations!</span> Got it in <span>{attempts} {attempts > 1 ? 'guesses' : 'guess'}</span>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <span>{answer}</span>.
        </p>
      )}
    </dialog>
  );
}

export default StatusBanner;
