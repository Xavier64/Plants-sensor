import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntranetComponent } from './intranet/intranet.component';
import { IntranetModule } from './intranet/intranet.module';
import { NavbarComponent } from './intranet/template/ui/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    IntranetComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IntranetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
