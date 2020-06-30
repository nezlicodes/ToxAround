import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToxServiceService } from './services/tox-service.service';
import { NavbarComponent } from './navbar/navbar.component';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import {MenuModule} from 'primeng/menu';
import {ToolbarModule} from 'primeng/toolbar';
import { ServicesComponent } from './views/services/services.component';
import { AboutComponent } from './views/about/about.component';
import { AirPollutionComponent } from './views/home/air-pollution.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AirPollutionComponent,
   AboutComponent,
    ServicesComponent,
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
    ButtonModule,
    MenuModule,
    ToolbarModule,
    SplitButtonModule
  ],
  providers: [ToxServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
