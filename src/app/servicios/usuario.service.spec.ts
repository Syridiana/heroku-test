import { TestBed } from '@angular/core/testing';

import { Usuario } from './usuario.service';

describe('UsuarioService', () => {
  let service: Usuario;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Usuario);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
