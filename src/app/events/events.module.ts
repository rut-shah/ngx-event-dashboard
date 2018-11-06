import { NgModule } from '@angular/core';

import { EventListComponent } from './event-list/event-list.component';
import { EventEditComponent } from './event-edit/event-edit.component';
import { EventsRoutingModule } from './events-routing.module';
import { CustommaterialModule } from '../custommaterial/custommaterial.module';
import { EventDetailsComponent } from './event-details/event-details.component';

@NgModule({
  imports: [
    CustommaterialModule,
    EventsRoutingModule
  ],
  declarations: [EventListComponent, EventEditComponent, EventDetailsComponent]
})
export class EventsModule { }
