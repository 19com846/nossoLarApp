import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NewTransferPage } from './new-transfer.page';
import { ModalPagePage } from './../modal-page/modal-page.page';

const routes: Routes = [
  {
    path: '',
    component: NewTransferPage
  }
];

@NgModule({
  imports: [
  CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewTransferPage]

})
export class NewTransferPageModule {}
