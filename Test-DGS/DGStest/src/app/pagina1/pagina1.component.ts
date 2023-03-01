import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit {

  battuta: string;
  constructor() { }

  ngOnInit(): void {
    this.battuta = "Quando Chuck Norris fa le flessioni è il mondo che fa su e giù."
  }

}
