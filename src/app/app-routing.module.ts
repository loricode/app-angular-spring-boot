import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacturaComponent } from './factura/factura.component'
const routes: Routes = [
    {path:'',  redirectTo:'/factura',  pathMatch: 'full', },
    {path:'factura', component:FacturaComponent},
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
