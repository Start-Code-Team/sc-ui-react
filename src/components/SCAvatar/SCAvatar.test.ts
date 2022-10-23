import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SCAvatar, { SCAvatarProps } from './SCAvatar';

const setUp = (props: SCAvatarProps) => {
  render(SCAvatar(props));
};

describe('Componente SCAvatar', () => {
  it('Renderizacion del componente SCAvatar', () => {
    setUp({ email: 'test@test.com' });
    expect(screen.getByTestId('SCAvatar')).toBeDefined();
  });
});
