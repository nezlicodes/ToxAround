import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ToxCreateComponent } from './tox-create/tox-create.component'
import { ToxListComponent } from './tox-list/tox-list.component'
import { ToxSingleComponent } from './tox-single/tox-single.component'
import { AirPollutionComponent } from './air-pollution/air-pollution.component'

const routes: Routes = [
  { path: 'create', component: ToxCreateComponent },
  { path: '', component: ToxListComponent },
  { path: 'single', component: ToxSingleComponent },
  {path: 'APD', component: AirPollutionComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }