import { Modal1PagePage } from './../modal1-page/modal1-page.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { NewTransferCollabPage } from './new-transfer-collab.page';

const routes: Routes = [
  {
    path: '',
    component: NewTransferCollabPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewTransferCollabPage,Modal1PagePage ],
  entryComponents: [Modal1PagePage]
})
export class NewTransferCollabPageModule {}
