import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-thank-you-message",
  templateUrl: "./thank-you-message.component.html",
  styleUrls: ["./thank-you-message.component.scss"],
})
export class ThankYouMessageComponent implements OnInit {
  public title: any;
  public message: any;

  constructor(private router: Router, private route: ActivatedRoute) {}

  navigateBack = () => {
    this.router.navigate(["/homepage"]);
  };

  ngOnInit(): void {
    this.title = this.route.snapshot.paramMap.get("title");
    if (this.title === "Thank you") {
      this.message = "You will receive an email with your e-book shortly";
    } else {
      this.title = "404 error";
      this.message = "Something went wrong";
    }
  }
}
