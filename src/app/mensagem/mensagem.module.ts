import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroMensagemComponent } from './cadastro-mensagem/cadastro-mensagem.component';
import {MensagemService} from './shared/service/mensagem.service';
import {AppSocialBaseMaterialModule} from '../shared/app-social-base-material/app-social-base-material.module';
import { ListagemMensagemComponent } from './listagem-mensagem/listagem-mensagem.component';

@NgModule({
  imports: [
    CommonModule,
    AppSocialBaseMaterialModule
  ],
  providers: [
    MensagemService
  ],
  declarations: [CadastroMensagemComponent, ListagemMensagemComponent]
})
export class MensagemModule { }
