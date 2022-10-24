import React from 'react';

interface SCRippleProps {
  rounded?: boolean;
}

const SCRipple = (props: SCRippleProps = {}) => {
  return(
    <div data-testid="SCRipple" {...props} className={`w-full h-full absolute top-0 bottom-0 left-0 ${(props.rounded) ? 'rounded-full' : 'rounded'} SCRipple`} ></div>
  )
}

export default SCRipple;