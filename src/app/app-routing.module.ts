import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";
import { ThankYouPageComponent } from "./thank-you-page/thank-you-page.component";

const routes: Routes = [
  { path: "homepage", component: HomepageComponent },
  { path: "thank-you/:title", component: ThankYouPageComponent },
  { path: "", redirectTo: "/homepage", pathMatch: "full" },
  { path: "**", component: ThankYouPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
