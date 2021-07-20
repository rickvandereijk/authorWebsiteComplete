import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.scss"],
})
export class CardsComponent implements OnInit {
  cards = [
    {
      image: "/./assets/wizard.png",
      title: "Characters",
      information:
        "Learn about surfboarding space wizards, their galactic escapades, and their unusual associates.",
    },
    {
      image: "/./assets/fairy2.png",
      title: "Races",
      information:
        "Discover the truth about trolls, fairies, tax collectors, and other, even more unusual, races.",
    },
    {
      image: "/./assets/universe.jpg",
      title: "Universe",
      information:
        "The galaxy is a dangerous place, full of Giant Tentacle Monsters and civil servants. Click to learn more.",
    },
  ];
  buttonText = ["Coming soon"];

  constructor() {}

  ngOnInit(): void {}
}
