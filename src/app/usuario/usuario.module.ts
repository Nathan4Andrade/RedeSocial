import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CadastroUsuarioComponent} from './cadastro-usuario/cadastro-usuario.component';
import {UsuarioService} from '../shared/service/usuario.service';
import {AppSocialBaseMaterialModule} from '../shared/app-social-base-material/app-social-base-material.module';
import {ListagemUsuarioComponent} from './listagem-usuario/listagem-usuario.component';

@NgModule({
  imports: [
    CommonModule,
    AppSocialBaseMaterialModule
  ],
  providers: [
    UsuarioService
  ],
  declarations: [CadastroUsuarioComponent, ListagemUsuarioComponent]
})
export class UsuarioModule {
}
