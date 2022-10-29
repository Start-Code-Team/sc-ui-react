import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SCRipple from './SCRipple';

const setUp = () => {
  render(SCRipple());
};

describe('Componente SCRipple', () => {
  it('Renderizacion del componente SCRipple', () => {
    setUp();
    expect(screen.getByTestId('SCRipple')).toBeDefined();
  });
});
