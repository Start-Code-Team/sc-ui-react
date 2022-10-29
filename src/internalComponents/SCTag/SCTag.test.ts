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


  it('Se utiliza la etiqueta <a/> en SCTag', () => {
    setUp({tagtype: 'a'});
    expect(document.querySelector('a')).not.toBeUndefined();
  });

  it('Se utiliza la etiqueta <div/> en SCTag', () => {
    setUp({tagtype: 'div'});
    expect(document.querySelector('div')).not.toBeUndefined();
  });

  it('Se utiliza la etiqueta <button/> en SCTag', () => {
    setUp({tagtype: 'button'});
    expect(document.querySelector('button')).not.toBeUndefined();
  });

  it('Se utiliza la etiqueta <span/> en SCTag', () => {
    setUp({tagtype: 'span'});
    expect(document.querySelector('span')).not.toBeUndefined();
  });

  it('Se utiliza la etiqueta <section/> en SCTag', () => {
    setUp({tagtype: 'section'});
    expect(document.querySelector('section')).not.toBeUndefined();
  });
  
  it('Se utiliza la etiqueta <main/> en SCTag', () => {
    setUp({tagtype: 'main'});
    expect(document.querySelector('main')).not.toBeUndefined();
  });

  it('Se utiliza la etiqueta <label/> en SCTag', () => {
    setUp({tagtype: 'label'});
    expect(document.querySelector('label')).not.toBeUndefined();
  });

  it('Se utiliza la etiqueta <ul/> en SCTag', () => {
    setUp({tagtype: 'ul'});
    expect(document.querySelector('ul')).not.toBeUndefined();
  });

  it('Se utiliza la etiqueta <li/> en SCTag', () => {
    setUp({tagtype: 'li'});
    expect(document.querySelector('li')).not.toBeUndefined();
  });

});
