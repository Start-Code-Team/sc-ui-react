import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SCRipple from './SCRipple';

const setUp = () => {
  render(SCRipple());
};

describe('Componente SCRipple', () => {
  it('Renderizacion del componente SCRipple', () => {
    setUp();
    expect(document.querySelector('div')).not.toBeUndefined();
  });
});
