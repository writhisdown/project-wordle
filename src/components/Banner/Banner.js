import React from 'react';
import styles from './styles.module.scss';

function Banner({ status, attempts, answer }) {
  const dialogRef = React.useRef();
  const dialogElement = dialogRef.current;
  
  React.useEffect(() => {
    if (!dialogElement) return;

    if (status !== 'running') {
      dialogElement?.showPopover();
    } else {
      dialogElement?.close();
    }
  }, [status]);

  return (
    <dialog 
      popover=''
      ref={dialogRef}
      className={`${styles.banner} ${status === 'win' ? styles.happy : styles.sad}`}
    >
      {status === 'win' ? (
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

export default Banner;
