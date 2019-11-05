import React, { FC } from 'react';

interface PropsStruct {
  href: string;
  className: string;
}

const ScrollLink: FC<PropsStruct> = props => {
  return (
    <a
      className={props.className}
      href={props.href}
      onClick={event => {
        event.preventDefault();
        const section = document.querySelector(props.href) as HTMLElement;
        if (!section) return;
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }}
    >
      {props.children}
    </a>
  );
};

export default ScrollLink;
