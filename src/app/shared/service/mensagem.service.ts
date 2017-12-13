import { Injectable } from '@angular/core';
import {Mensagem} from '../model/mensagem';

@Injectable()
export class MensagemService {

  constructor() { }
  enviarMensagem(mensagem: Mensagem) {
    console.log('Cadastrado ' + mensagem.conteudo);
  }

}
