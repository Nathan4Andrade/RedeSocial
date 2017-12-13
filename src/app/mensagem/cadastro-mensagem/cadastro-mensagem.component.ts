///<reference path="../../shared/service/mensagem.service.ts"/>
import {Component, OnInit} from '@angular/core';
import {Mensagem} from '../../shared/model/mensagem';
import {MensagemService} from '../../shared/service/mensagem.service';

@Component({
  selector: 'app-cadastro-mensagem',
  templateUrl: './cadastro-mensagem.component.html',
  styleUrls: ['./cadastro-mensagem.component.css']
})
export class CadastroMensagemComponent implements OnInit {

  mensagem: Mensagem = new Mensagem;

  constructor(private mensagemService: MensagemService) {
  }

  ngOnInit() {
  }

  enviarMensagem() {
    this.mensagemService.enviarMensagem(this.mensagem);
    this.mensagem = new Mensagem();
  }

}
