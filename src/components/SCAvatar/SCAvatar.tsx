import React from 'react';

export interface SCAvatarProps {
  firstName?: string;
  lastName?: string;
  email?: string;
  size?: number;
  imgUrl?: string;
}

const FONT_SIZE_MULTIPLIER = 0.45;

const SCAvatar = (props: SCAvatarProps): JSX.Element => {
  const { firstName, lastName, email, size = 24, imgUrl } = props;

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

  function initials() {
    const firstAbbreviated = initial(firstName);
    const lastAbbreviated = initial(lastName);
    const emailAbbreviated = initial(email);
    return firstAbbreviated + lastAbbreviated || emailAbbreviated;
  }

  function initial(word?: string) {
    const initial = word && word.length ? word[0] : '';
    return initial.toUpperCase();
  }

  return (
    <div>
      <div
        data-testid='SCAvatar'
        className='flex rounded-full text-white justify-center items-center border-white bg-cover shadow-md avatar-no-image'
        role='img'
        aria-label=' '
        style={{
          width: size,
          height: size,
          fontSize: fontSize(),
          ...backgroundColor
        }}
      >
        {initials()}
      </div>
    </div>
  );
};

export default SCAvatar;
