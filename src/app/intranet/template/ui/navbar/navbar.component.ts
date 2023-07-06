import { Component } from '@angular/core';
import { NavbarI } from '../../../utils/modeles/Types';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public navbars: NavbarI[] = [
    {
      img:"assets/home.svg",
      name:"Home",
      url:"/intranet/home"
    },
    {
      img:"assets/plants.svg",
      name:"Plants",
      url:"/intranet/plants"
    },
    {
      img:"assets/humidity.svg",
      name:"Humidity",
      url:"/intranet/humidity"
    },
    {
      img:"assets/sensor.svg",
      name:"Sensor",
      url:"/intranet/sensor"
    },
    {
      img:"assets/alert.svg",
      name:"Alert",
      url:"/intranet/alert"
    },
    {
      img:"assets/historic.svg",
      name:"Historic",
      url:"/intranet/historic"
    },
  ]
}