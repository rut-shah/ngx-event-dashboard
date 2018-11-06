import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsComponent } from './events.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventEditComponent } from './event-edit/event-edit.component';
import { EventDetailsComponent } from './event-details/event-details.component';

const routes: Routes = [
  { path: 'events', component: EventsComponent,
    children: [
      { path: '', redirectTo: 'event-list', pathMatch: 'full' }, 
      { path: 'event-list', component: EventListComponent }, 
      { path: 'event-edit', component: EventEditComponent }, 
      { path: 'event-details', component: EventDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports:[ RouterModule ]
})
export class EventsRoutingModule { }
