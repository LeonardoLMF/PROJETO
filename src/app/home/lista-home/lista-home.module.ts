import { SharedModule } from 'src/app/core/shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaHomePage } from './lista-home.page';

const routes: Routes = [
  {
    path: '',
    component: ListaHomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaHomePage]
})
export class ListaHomePageModule {}
