import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SCAvatar, { SCCompanyAvatarProps } from './SCCompanyAvatar';

const setUp = (props: SCCompanyAvatarProps) => {
  render(SCAvatar(props));
};

describe('Componente SCCompanyAvatar', () => {
  it('Renderizacion del componente SCCompanyAvatar', () => {
    setUp({});
    expect(screen.getByTestId('SCCompanyAvatar')).toBeDefined();
  });
});