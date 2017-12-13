import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {MatInputModule, MatButtonModule, MatCheckboxModule, MatCardModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModuleModule} from './app-routing.module';
import {UsuarioModule} from './usuario/usuario.module';
import {MensagemModule} from './mensagem/mensagem.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    MatInputModule, MatButtonModule, MatCheckboxModule, MatCardModule,
    UsuarioModule,
    MensagemModule,
    AppRoutingModuleModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
