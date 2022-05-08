import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, ROUTES, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CompletatiComponent } from './completati/completati.component';
import { AppRoutes } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    CompletatiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(AppRoutes)


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
