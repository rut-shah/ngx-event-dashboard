import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadHelperComponent } from './upload-helper/upload-helper.component';

const routes: Routes = [
  { path: '', redirectTo: 'message', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
