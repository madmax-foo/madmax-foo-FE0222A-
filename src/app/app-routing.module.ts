import { NgModule } from '@angular/core';

import { RouterModule, ROUTES, Routes } from '@angular/router';
import { CompletatiComponent } from './completati/completati.component';
import { AppComponent } from './app.component';
export const AppRoutes: Routes = [
{path:'app', component:CompletatiComponent},
{path:' ', component:AppComponent}]



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(AppRoutes),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
