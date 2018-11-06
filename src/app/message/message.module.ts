import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatSelectModule } from '@angular/material';

import { MessageListComponent } from './message-list/message-list.component';
import { CustommaterialModule } from '../custommaterial/custommaterial.module';
import { MessageComposeComponent } from './message-compose/message-compose.component';
import { MessageComponent } from './message.component';
import { MessageRoutingModule } from './message-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CustommaterialModule,
    MessageRoutingModule
  ],
  declarations: [MessageListComponent, MessageComposeComponent, MessageComponent]
})
export class MessageModule { }
