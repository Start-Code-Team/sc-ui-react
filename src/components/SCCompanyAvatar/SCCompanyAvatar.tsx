import React from 'react';

export interface SCCompanyAvatarProps {
  size?: number;
  imgUrl?: string;
}

const SCBusinessIcon = ({ size }: { size: number }) => {
  return (
    <svg
      focusable='false'
      aria-hidden='true'
      viewBox='0 0 24 24'
      data-testid='BusinessIcon'
      fill='#fff'
      width={size}
      height={size}
    >
      <path d='M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z'></path>
    </svg>
  );
};

const FONT_SIZE_MULTIPLIER = 0.45;

const SCCompanyAvatar = (props: SCCompanyAvatarProps): JSX.Element => {
  const { size = 24, imgUrl } = props;

  const backgroundColor = {
    backgroundColor: 'var(--SCColor-Light-Grey-Blue)',
    backgroundImage: ''
  };

  if (imgUrl) {
    backgroundColor.backgroundImage = `url(${imgUrl})`;
  }

  function fontSize() {
    return Math.ceil(size * FONT_SIZE_MULTIPLIER);
  }

  return (
    <div
      data-testid='SCCompanyAvatar'
      className='rounded flex justify-center items-center bg-cover text-white'
      role='img'
      style={{
        width: size,
        height: size,
        ...backgroundColor
      }}
    >
      {!imgUrl && <SCBusinessIcon size={fontSize()} />}
    </div>
  );
};

export default SCCompanyAvatar;
