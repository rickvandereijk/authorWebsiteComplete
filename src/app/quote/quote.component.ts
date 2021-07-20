import { Component, OnInit } from "@angular/core";
import { QuoteServiceService } from "../quote-service.service";

@Component({
  selector: "app-quote",
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.scss"],
})
export class QuoteComponent implements OnInit {
  buttonText = "Coming soon";

  public quote: any = { data: [{ quote: "" }] };

  constructor(private quoteService: QuoteServiceService) {}

  ngOnInit() {
    this.generateQuote();
  }

  generateQuote() {
    this.quoteService.getQuote().subscribe((quote) => {
      this.quote = quote;
    });
  }
}
