import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { FreeeBookService } from "../freee-book.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-homepage-form",
  templateUrl: "./homepage-form.component.html",
  styleUrls: ["./homepage-form.component.scss"],
})
export class HomepageFormComponent implements OnInit {
  freeeBookForm = this.formBuilder.group({
    email: ["", [Validators.required, Validators.email]],
  });

  get email(): any {
    return this.freeeBookForm.get("email");
  }

  constructor(
    private formBuilder: FormBuilder,
    private freeeBookService: FreeeBookService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  sendeBook() {
    const email = this.freeeBookForm.value.email;
    this.freeeBookService.sendeBook(email).subscribe(
      (res) => {
        this.router.navigate(["/thank-you", "Thank you"]);
      },
      (err) => {
        this.router.navigate(["/thank-you"]);
      }
    );
  }
}
