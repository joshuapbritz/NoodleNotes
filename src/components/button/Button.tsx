import React, { FC } from 'react';
import styles from './Button.module.scss';

const Button: FC = props => {
  return <button className={styles.button}>{props.children}</button>;
};

export default Button;
