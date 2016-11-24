/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { UpperCasePipe } from './upper-case.pipe';

describe('Pipe: UpperCase', () => {
  it('create an instance', () => {
    let pipe = new UpperCasePipe();
    expect(pipe).toBeTruthy();
  });
  it('Hola should return: HOLA', () => {
    let sut = new UpperCasePipe();
    expect(sut.transform('Hola')).toBe('HOLA');
  });
});
