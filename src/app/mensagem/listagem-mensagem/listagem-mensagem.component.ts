import {DataSource} from '@angular/cdk/collections';
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Mensagem} from '../../shared/model/mensagem';
import {MensagemService} from '../../shared/service/mensagem.service';

@Component({
  selector: 'app-listagem-mensagem',
  templateUrl: './listagem-mensagem.component.html',
  styleUrls: ['./listagem-mensagem.component.css']
})
export class ListagemMensagemComponent implements OnInit {

  dataSource = new MensagemDataSource(this.mensagemService);
  /* language=Angular2HTML*/
  displayedColumns = ['login', 'conteudo'];

  constructor(private mensagemService: MensagemService) {
  }

  ngOnInit() {
  }

}

export class MensagemDataSource extends DataSource<any> {
  constructor(private mensagemService: MensagemService) {
    super();
  }
  connect(): Observable<Mensagem[]> {
    return this.mensagemService.getMensagens();
  }
  disconnect() {}
}
