import React from 'react';
import SCTag from '../../internalComponents/SCTag/SCTag';

export interface SCCardProps {
  primary?: boolean;
  secondary?: boolean;
  warn?: boolean;
  danger?: boolean;
  info?: boolean;
  success?: boolean;

  raised?: boolean;
  bordered?: boolean;

  href?: string;
  onClick?: () => void;
  className?: string;
  styles?: string;

  children?: any;
}

const SCCard = (props: SCCardProps = {}): JSX.Element => {

  const setTheme = () => {
    if(props.primary) {
      return 'SCCard-Primary';
    }
    if(props.secondary) {
      return 'SCCard-Secondary';
    }
    if(props.warn) {
      return 'SCCard-Warn';
    }
    if(props.danger) {
      return 'SCCard-Danger';
    }
    if(props.info) {
      return 'SCCard-Info';
    }
    if(props.success) {
      return 'SCCard-Success';
    }
    return 'SCCard-Default';
  }
  const setBorder = () => {
    if(props.primary) {
      return 'SCCard-Border-Primary';
    }
    if(props.secondary) {
      return 'SCCard-Border-Secondary';
    }
    if(props.warn) {
      return 'SCCard-Border-Warn';
    }
    if(props.danger) {
      return 'SCCard-Border-Danger';
    }
    if(props.info) {
      return 'SCCard-Border-Info';
    }
    if(props.success) {
      return 'SCCard-Border-Success';
    }
    return 'SCCard-Border-Default';
  }
  
  return(
    <SCTag {...props} 
    tagtype={props.href ? 'a' : props.onClick ? 'button' : 'div'}
    className={` inline
    ${(props.raised) ? 'shadow-md border-0' : 'border-2 '} ${props.className} ${props.bordered ? setBorder() : setTheme()}

    ${(!props.href && !props.onClick) && 'rounded-lg overflow-auto transform border-solid text-black transition-all duration-500 ease-out-exp'}
    ${props.href && 'rounded-lg overflow-auto transform border-solid border-0 cursor-pointer hover:shadow-clickable hover:-translate-y-1 focus:shadow-clickable focus:-translate-y-1 focus:outline-none transition-all duration-500 ease-out-exp'}
    ${props.onClick && 'rounded-lg overflow-auto transform border-solid border-0 cursor-pointer hover:shadow-clickable hover:-translate-y-1 focus:shadow-clickable focus:-translate-y-1 focus:outline-none transition-all duration-500 ease-out-exp'}
    `} data-testid="SCCard">
        {props.children}
    </SCTag>
  )
}

export default SCCard;
