import React from 'react';

const SCRipple = (props?: any) => {
  return(
    <div {...props} className={`w-full h-full absolute top-0 bottom-0 left-0 ${props.rounded ? 'rounded-full' : 'rounded'} SCRipple`} ></div>
  )
}

export default SCRipple;