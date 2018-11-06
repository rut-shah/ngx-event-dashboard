import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { CustommaterialModule } from './custommaterial/custommaterial.module';
import { AppRoutingModule } from './app-routing.module';
import { MessageModule } from './message/message.module';
import { HeaderComponent } from './header/header.component';
import { EventsComponent } from './events/events.component';
import { EventsModule } from './events/events.module';
import { UploadHelperComponent } from './upload-helper/upload-helper.component';
import { UploadModule } from './upload-helper/upload.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventsComponent,
    UploadHelperComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CustommaterialModule,
    MessageModule,
    EventsModule,
    UploadModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
