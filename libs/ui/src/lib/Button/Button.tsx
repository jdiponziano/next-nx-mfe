import styles from './Button.module.scss';

/* eslint-disable-next-line */
export interface ButtonProps {
  onClick: () => void;
}

export function Button({ onClick }: ButtonProps) {
  return (
    <button className={styles['container']} onClick={onClick}>
      Increment
    </button>
  );
}

export default Button;
