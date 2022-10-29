import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SCCard from './SCCard';

const setUp = (props) => {
  render(SCCard(props));
};

describe('Componente SCCard', () => {
  it('Renderizacion del componente SCCard', () => {
    setUp();
  });

  it('Se utiliza la etiqueta <a/> en SCCard', () => {
    setUp({ href: 'asdasd' });
    expect(document.querySelector('a')).not.toBeUndefined();
  });

  it('Se utiliza la etiqueta <button/> en SCCard', () => {
    setUp({ onClick: () => {} });
    expect(document.querySelector('button')).not.toBeUndefined();
  });

  it('Se utiliza la etiqueta <div/> en SCCard', () => {
    setUp({});
    expect(document.querySelector('div')).not.toBeUndefined();
  });

  it('El componente obtiene la clase del tema seleccionado: primary={true}', () => {
    setUp({ primary: true });
    expect(document.querySelector('.SCCard-Primary')).not.toBeUndefined();
  });

  it('El componente obtiene la clase del tema seleccionado: danger={true}', () => {
    setUp({ danger: true });
    expect(document.querySelector('.SCCard-Danger')).not.toBeUndefined();
  });

  it('El componente obtiene la clase del tema seleccionado mas el atributo bordered: bordered={true} primary={true}', () => {
    setUp({ primary: true, bordered: true });
    expect(document.querySelector('.SCCard-Border-Primary')).not.toBeUndefined();
  });

  it('El componente obtiene la clase del tema seleccionado mas el atributo bordered: bordered={true} danger={true}', () => {
    setUp({ danger: true, bordered: true });
    expect(document.querySelector('.SCCard-Border-Danger')).not.toBeUndefined();
  });

  it('El componente obtiene la clase shadow por la propiedad: raised={true}', () => {
    setUp({ raised: true });
    expect(document.querySelector('.shadow-md')).not.toBeUndefined();
  });
});
