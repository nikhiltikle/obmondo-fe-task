import React from 'react';
import styles from './styles.module.css';

interface ButtonProps {
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export const Button = ({
  title,
  disabled,
  onClick,
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={styles.button}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
