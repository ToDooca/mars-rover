import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HomeComponent} from './home/home.component';
import {RouterModule} from "@angular/router";
import { PlateauComponent } from './home/plateau/plateau.component';
import { JoystickComponent } from './home/joystick/joystick.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlateauComponent,
    JoystickComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
