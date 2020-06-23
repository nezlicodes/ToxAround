import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToxCreateComponent } from './tox-create/tox-create.component';
import { ToxListComponent } from './tox-list/tox-list.component';
import { ToxSimgleComponent } from './tox-simgle/tox-simgle.component';
import { ToxSingleComponent } from './tox-single/tox-single.component';

@NgModule({
  declarations: [
    AppComponent,
    ToxCreateComponent,
    ToxListComponent,
    ToxSimgleComponent,
    ToxSingleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
