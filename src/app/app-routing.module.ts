import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AirPollutionComponent } from './views/home/air-pollution.component';
import { AboutComponent } from './views/about/about.component';
import { ServicesComponent } from './views/services/services.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: '', component: AirPollutionComponent },
  { path: 'services', component: ServicesComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }