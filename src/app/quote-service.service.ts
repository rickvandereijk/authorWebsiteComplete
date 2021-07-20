import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuoteServiceService {
  
  private url: string = "https://intense-crag-66710.herokuapp.com/api/v1/quotes/singlequote";
  
  constructor(private http: HttpClient) { 
  }

  getQuote() { 
    const response = this.http.get(this.url);
    this.http.get(this.url).subscribe();
   return response;
}
}
