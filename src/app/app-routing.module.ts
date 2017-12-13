import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {CadastroUsuarioComponent} from './usuario/cadastro-usuario/cadastro-usuario.component';
import {ListagemUsuarioComponent} from './usuario/listagem-usuario/listagem-usuario.component';
import {CadastroMensagemComponent} from './mensagem/cadastro-mensagem/cadastro-mensagem.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'usuario/cadastro',
        component: CadastroUsuarioComponent
      },
      {
        path: 'usuario/listagem',
        component: ListagemUsuarioComponent
      },
      {
        path: 'mensagem/cadastro',
        component: CadastroMensagemComponent
      },
    ],
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModuleModule {
}
