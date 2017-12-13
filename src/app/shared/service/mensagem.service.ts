import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Mensagem} from '../model/mensagem';

@Injectable()
export class MensagemService {
  mensagens: Array<Mensagem> = [];

  constructor() { }
  enviarMensagem(mensagem: Mensagem) {
    console.log('Cadastrado ' + mensagem.conteudo);
  }
  getMensagens(): Observable<Mensagem[]> {
    return Observable.of(this.mensagens);
  }

}
