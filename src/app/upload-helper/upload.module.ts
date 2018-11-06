import { NgModule } from '@angular/core';
import { CustommaterialModule } from '../custommaterial/custommaterial.module';
import { UploadRoutingModule } from './upload-routing.module';

@NgModule({
  imports: [
    CustommaterialModule,
    UploadRoutingModule
  ],
  declarations: []
})
export class UploadModule { }
