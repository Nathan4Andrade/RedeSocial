import {Injectable} from '@angular/core';
import {Usuario} from '../model/usuario';

@Injectable()
export class UsuarioService {

  constructor() {
  }

  cadastrarUsuario(usuario: Usuario) {
    console.log('Cadastrado ' + usuario.nome);
  }

}
