import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ChatComponent} from './chat/chat.component';
import { RoutingModule } from './routing.module';
import {UserProfileComponent} from './user-profile/user-profile.component'



@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
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
  entryComponents: [UserProfileComponent]
})
export class AppModule { }
