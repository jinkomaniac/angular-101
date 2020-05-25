import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { FirstPageComponent } from "./first-page/first-page.component";
import { SecondPageComponent } from "./second-page/second-page.component";
import { HomeComponent } from "./home/home.component";
import { JineshComponent } from "./jinesh/jinesh.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: "first", component: FirstPageComponent },
  { path: "second", component: SecondPageComponent },
  { path: "second/:id", component: SecondPageComponent },
  { path: "jinesh", component: JineshComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
