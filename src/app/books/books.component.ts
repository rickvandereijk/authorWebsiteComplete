import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.scss"],
})
export class BooksComponent implements OnInit {
  books = [
    { image: "./assets/Book_2.jpg", title: "The joy of Brussels sprouts" },
    {
      image: "./assets/Book_3.jpg",
      title: "The refined art of cynicism",
    },
    {
      image: "./assets/Book_1.jpg",
      title: "Space wizards versus tentacle monsters",
    },
  ];

  buttonText = ["Coming soon", "Coming soon", "Coming soon"];

  slideClasses = [
    "section-books__book section-books__book--0",
    "section-books__book section-books__book--1",
    "section-books__book section-books__book--2",
  ];

  slides = [this.slideClasses[0], this.slideClasses[1], this.slideClasses[2]];

  clickRight() {
    let el: any = this.slides.shift();
    let el2: any = this.slides.shift();
    this.slides.push(el, el2);
  }

  clickLeft() {
    let el: any = this.slides.pop();
    let el2: any = this.slides.pop();
    this.slides.unshift(el2, el);
  }

  constructor() {}

  ngOnInit() {}
}

/*

clickRight() {
if(this.curSlide >=this.maxSlide) {
  this.curSlide = 0;
  this.slides = [this.slideClasses[0], this.slideClasses[1],this.slideClasses[2]];
} else {
  this.curSlide ++;
  let el: any = this.slides.shift();
  let el2: any = this.slides.shift();
  this.slides.push(el, el2);
}
}

clickLeft() {
  if(this.curSlide <=0) {
    this.curSlide = 2;
    this.slides = [this.slideClasses[2], this.slideClasses[1],this.slideClasses[0]];
  } else {
    this.curSlide --;
    let el: any = this.slides.pop();
    let el2: any = this.slides.pop();
    this.slides.unshift(el2,el);
  }
  */
