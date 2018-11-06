import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UploadHelperComponent } from './upload-helper.component';

const routes: Routes = [
  { path: 'upload', component: UploadHelperComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports:[ RouterModule ]
})
export class UploadRoutingModule { }
