import {DataSource} from '@angular/cdk/collections';
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Usuario} from '../../shared/model/usuario';
import {UsuarioService} from '../../shared/service/usuario.service';

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrls: ['./listagem-usuario.component.css']
})
export class ListagemUsuarioComponent implements OnInit {

  dataSource = new UsuarioDataSource(this.usuarioService);
  displayedColumns = ['login', 'nome'];

  constructor(private usuarioService: UsuarioService) {
  }

  ngOnInit() {
  }

}

export class UsuarioDataSource extends DataSource<any> {
  constructor(private usuarioService: UsuarioService) {
    super();
  }
  connect(): Observable<Usuario[]> {
    return this.usuarioService.getUsuarios();
  }
  disconnect() {}
}
