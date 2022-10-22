import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

const setUp = () => {
  render(App());
};

describe('Componente App', () => {
  it('Renderizacion del componente App', () => {
    setUp();
  });
});
