import { Component } from '@angular/core';
import { NavbarI } from '../../../utils/modeles/Types';
import { Router } from '@angular/router';

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
      url:"/intranet/home",
      active: false,
    },
    {
      img:"assets/humidity.svg",
      name:"Gestion",
      url:"/intranet/humidity",
      active: false,
    },
    {
      img:"assets/historic.svg",
      name:"Historic",
      url:"/intranet/historic",
      active: false,
    },
  ]

  constructor(private router: Router){
    const activeUrl = this.router.url;
    this.navbars.forEach(item => {
      item.active = activeUrl.startsWith(item.url);
  });
  }

  onNavItemClick(navbar:NavbarI) {
    this.navbars.forEach(item => item.active = false);
    navbar.active = true;
}
}