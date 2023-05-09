import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntranetRoutingModule } from './intranet-routing.module';
import { HomeComponent } from './home/home.component';
import { PLantsComponent } from './plants/plants.component';
import { HumidityComponent } from './humidity/humidity.component';
import { SensorComponent } from './sensor/sensor.component';
import { AlertComponent } from './alert/alert.component';
import { HistoricComponent } from './historic/historic.component';
import { ButtonComponent } from './template/ui/button/button.component';
import { DropdownComponent } from './template/ui/dropdown/dropdown.component';

@NgModule({
  declarations: [
    HomeComponent,
    PLantsComponent,
    HumidityComponent,
    SensorComponent,
    AlertComponent,
    HistoricComponent,
    ButtonComponent,
    DropdownComponent
  ],

  imports: [
    CommonModule,
    IntranetRoutingModule,
  ]
})
export class IntranetModule { }
