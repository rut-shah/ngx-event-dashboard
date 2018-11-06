import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessageComponent } from './message.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageComposeComponent } from './message-compose/message-compose.component';

const routes: Routes = [
  { path: 'message', component: MessageComponent,
    children: [
      { path: '', redirectTo: 'message-list', pathMatch: 'full' }, 
      { path: 'message-list', component: MessageListComponent }, 
      { path: 'message-compose', component: MessageComposeComponent }, 
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports:[ RouterModule ]
})
export class MessageRoutingModule { }
