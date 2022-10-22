import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SCButton, { SCButtonProps } from './SCButton';

const setUp = (props: SCButtonProps) => {
  render(SCButton(props));
};

describe('Componente SCButton', () => {
  it('Renderizacion del componente SCButton', () => {
    setUp({});
    expect(screen.getByTestId('SCButton')).toBeDefined();
  });

  it('Se utiliza la etiqueta <a/> en SCButton', () => {
    setUp({ href: 'asdasd' });
    expect(document.querySelector('a')).not.toBeUndefined();
  });

  it('Se utiliza la etiqueta <button/> en SCButton', () => {
    setUp({ onClick: () => {} });
    expect(document.querySelector('button')).not.toBeUndefined();
  });

  it('El componente obtiene la clase del tema seleccionado', () => {
    setUp({ primary: true });
  });
});
