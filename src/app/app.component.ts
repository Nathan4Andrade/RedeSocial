import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{
  name = 'Angular 5';
  api = 'https://my-json-server.typicode.com/gugawag/app-social/usuarios';

  usuarios = [];
  constructor(private http: HttpClient) {

  }
  
  
  ngOnInit() {
    this.http.get<any[]>(this.api).subscribe(
      usuarios => {
        this.usuarios = usuarios;
      }
    );
  }

  remover(usuario) {
    this.http.delete(`${this.api}/${usuario.id}`).subscribe(
      sucesso => {
        console.log('Apagou');
        this.usuarios.splice(usuario.id, 1);
      },
      erro => {console.log('Erro ao apagar: ' + erro)}
    );
  }

}
