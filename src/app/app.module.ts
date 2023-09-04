import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { IuserModel } from './Interfaces/IuserModel';
import { ReactUsersComponent } from './components/userRegistration/react-users/react-users.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ReactUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
