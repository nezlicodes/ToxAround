import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ToxCreateComponent } from './tox-create/tox-create.component';
import { ToxListComponent } from './tox-list/tox-list.component';
import { ToxSingleComponent } from './tox-single/tox-single.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToxServiceService } from './services/tox-service.service';
import { NavbarComponent } from './navbar/navbar.component';
import { AirPollutionComponent } from './air-pollution/air-pollution.component';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [
    AppComponent,
    ToxCreateComponent,
    ToxListComponent,
    ToxSingleComponent,
    NavbarComponent,
    AirPollutionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InputTextModule,
    CalendarModule,
    ButtonModule
  ],
  providers: [ToxServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
