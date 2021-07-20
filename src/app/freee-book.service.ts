import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class FreeeBookService {
  //https://intense-crag-66710.herokuapp.com/api/v1/emails/addToMailchimp
  //http://localhost:8000/api/v1/emails/addToMailchimp"
  private url: string = "http://localhost:8000/api/v1/emails/addToMailchimp";

  constructor(private http: HttpClient) {}

  sendeBook(email: any) {
    const response = this.http.post(this.url, {
      email,
    });
    return response;
  }
}
