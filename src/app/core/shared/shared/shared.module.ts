import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ValorComponent } from '../valor/valor.component';
import { ListaEnderecoPage } from 'src/app/enderecos/lista-endereco/lista-endereco.page';
import { ValorpromoComponent } from '../valorpromo/valorpromo.component';

@NgModule({
  declarations: [ValorComponent, ListaEnderecoPage,ValorpromoComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[
    CommonModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule,
    ValorComponent,
    ListaEnderecoPage,
    ValorpromoComponent
  ],
  entryComponents: [ValorComponent, ListaEnderecoPage,ValorpromoComponent]
})
export class SharedModule { }
