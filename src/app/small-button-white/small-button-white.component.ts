import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-button-white',
  templateUrl: './small-button-white.component.html',
  styleUrls: ['./small-button-white.component.scss']
})
export class SmallButtonWhiteComponent implements OnInit {
  @Input() buttonText = "";

  constructor() { }

  ngOnInit(): void {
  }

}
