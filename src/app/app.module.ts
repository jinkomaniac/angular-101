import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { HomeComponent } from './home/home.component';
import { JineshComponent } from './jinesh/jinesh.component';

@NgModule({
  imports: [AppRoutingModule, BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, FirstPageComponent, SecondPageComponent, HomeComponent, JineshComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
