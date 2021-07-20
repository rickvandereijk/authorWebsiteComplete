import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-thank-you-page",
  templateUrl: "./thank-you-page.component.html",
  styleUrls: ["./thank-you-page.component.scss"],
})
export class ThankYouPageComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(["/homepage"]);
    }, 5000);
  }
}
