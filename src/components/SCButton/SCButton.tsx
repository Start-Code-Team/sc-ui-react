import React from 'react';
import SCRipple from '../../internalComponents/SCRipple/SCRipple';
import SCTag from '../../internalComponents/SCTag/SCTag';

export interface SCButtonProps {
  primary?: boolean;
  secondary?: boolean;
  warn?: boolean;
  danger?: boolean;
  info?: boolean;
  success?: boolean;
  ripple?: boolean;

  rounded?: boolean;
  outline?: boolean;

  href?: string;
  onClick?: () => void;
  className?: string;
  styles?: string;

  children?: any;
}

const SCButton = (props: SCButtonProps): JSX.Element => {
  const { ripple = true } = props;

  const setTheme = () => {
      if(props.primary) {
        return 'SCButton-Primary';
      }
      if(props.secondary) {
        return 'SCButton-Secondary';
      }
      if(props.warn) {
        return 'SCButton-Warn';
      }
      if(props.danger) {
        return 'SCButton-Danger';
      }
      if(props.info) {
        return 'SCButton-Info';
      }
      if(props.success) {
        return 'SCButton-Success';
      }
      return 'SCButton-Default';
  }
  return(
    <SCTag {...props} tagtype={props.href ? 'a' : 'button'} className={`relative hover:opacity-50 text-white font-bold py-2 px-4 ${props.rounded ? 'rounded-full' : 'rounded'} ${setTheme()} ${props.className}`} data-testid="SCButton">
      {ripple && <SCRipple rounded={props.rounded} />}
      {props.children}
    </SCTag>
  )
}

export default SCButton;
