import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-books-icon',
  templateUrl: './books-icon.component.html',
  styleUrls: ['./books-icon.component.scss']
})
export class BooksIconComponent implements OnInit {
  @Input() arrowRight: boolean = false
  constructor() { }

  ngOnInit(): void {

  }
  


}
