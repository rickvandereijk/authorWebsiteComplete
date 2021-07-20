import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormspreeService {

  constructor(private http: HttpClient) { }


 formSpreeHandler() {
  //e.preventDefault()
  console.log("send");

return this.http.post("https://formspree.io/f/xgerzjzj", 
    {
        name: 'test',
        _replyto: 'rickvdeijk@gmail.com',
        message: "testMessage"
    }
)
 }
}
