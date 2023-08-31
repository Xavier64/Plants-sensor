import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'intranet', loadChildren: () =>  import('./intranet/intranet.module').then( m => m.IntranetModule)},
  { path: '', redirectTo: '/intranet/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
