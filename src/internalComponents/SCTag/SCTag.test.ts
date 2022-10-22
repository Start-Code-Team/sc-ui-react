import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SCTag, { SCTagProps } from './SCTag';

const setUp = (props: SCTagProps) => {
  render(SCTag(props));
};

describe('Componente SCTag', () => {
  it('Renderizacion del componente SCTag', () => {
    setUp({});
    expect(document.querySelector('div')).not.toBeUndefined();
  });
});
