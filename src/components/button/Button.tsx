import React, { FC } from 'react';
import styles from './Button.module.scss';
import ScrollLink from '../scroll-link/ScrollLink';

interface PropStruct {
  href?: string;
  scrollAnchor?: string;
}

const Button: FC<PropStruct> = props => {
  if (!props.href && !props.scrollAnchor) {
    return <button className={styles.button}>{props.children}</button>;
  } else if (!!props.scrollAnchor) {
    return (
      <ScrollLink href={props.scrollAnchor} className={styles.button}>
        {props.children}
      </ScrollLink>
    );
  } else {
    return (
      <a href={props.href} className={styles.button}>
        {props.children}
      </a>
    );
  }
};

export default Button;
