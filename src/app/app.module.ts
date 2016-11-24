import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoggerService } from './logger.service';
import { UpperCasePipe } from './upper-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    UpperCasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ LoggerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
