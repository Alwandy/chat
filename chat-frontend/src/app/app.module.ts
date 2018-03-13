import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ChatComponent, LoginComponent, GuestComponent} from './chat/chat.component';
import { RoutingModule } from './routing.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GuestComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent, GuestComponent]
})
export class AppModule { }
