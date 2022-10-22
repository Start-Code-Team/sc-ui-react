import React from 'react';

export interface SCTagProps {
  tagtype?: 'a' | 'button' | 'div' | 'span' | 'section' | 'main' | 'label' | 'ul' | 'li' | undefined;

  children?: any;
}

const SCTag = (props?: any) => {
  const { tagtype, children } = props;
  switch (tagtype) {
    case 'a':
      return <a {...props}>{children}</a>;
    break;
    case 'button':
      return <button {...props}>{children}</button>;
    break;
    case 'div':
      return <div {...props}>{children}</div>;
    break;
    case 'span':
      return <span {...props}>{children}</span>;
    break;
    case 'section':
      return <section {...props}>{children}</section>;
    break;
    case 'main':
      return <main {...props}>{children}</main>;
    break;
    case 'label':
      return <label {...props}>{children}</label>;
    break;
    case 'ul':
      return <ul {...props}>{children}</ul>;
    break;
    case 'li':
      return <li {...props}>{children}</li>;
    break;
    default:
      return <div {...props}>{children}</div>;
    break;
  }
}

export default SCTag;