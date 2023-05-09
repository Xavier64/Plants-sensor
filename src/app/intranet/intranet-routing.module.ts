import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntranetComponent } from './intranet.component';
import { HomeComponent } from './home/home.component';
import { HumidityComponent } from './humidity/humidity.component';
import { PLantsComponent } from './plants/plants.component';
import { SensorComponent } from './sensor/sensor.component';
import { AlertComponent } from './alert/alert.component';
import { HistoricComponent } from './historic/historic.component';

const routes: Routes = [
  {path:'', component:IntranetComponent, children:[
    {path:'home', component: HomeComponent},
    {path:'humidity', component: HumidityComponent},
    {path:'plants', component: PLantsComponent},
    {path:'sensor', component: SensorComponent},
    {path:'alert', component: AlertComponent},
    {path:'historic', component: HistoricComponent}
]},
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { }
